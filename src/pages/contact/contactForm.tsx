import React, { useState } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

const ContactForm: React.FC = () => {
  const initForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    customSubject: "",
    message: "",
  };
  const [formData, setFormData] = useState({ ...initForm });
  const [errors, setErrors] = useState({ ...initForm, form: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isCustomSubjectRequired, setIsCustomSubjectRequired] = useState(false);
  const maxMessageLength = 250;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === "subject" && value === "outro") {
      setIsCustomSubjectRequired(true);
    } else if (name === "subject") {
      setIsCustomSubjectRequired(false);
      setFormData({ ...formData, [name]: value, customSubject: "" });
    }
  };

  const validate = (): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Nome é obrigatório.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido.";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Telefone é obrigatório.";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Assunto é obrigatório.";
      isValid = false;
    }
    if (isCustomSubjectRequired && !formData.customSubject) {
      newErrors.customSubject = "Assunto personalizado é obrigatório.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Mensagem é obrigatória.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    const cleanedFormData = {
      ...formData,
      subject: isCustomSubjectRequired
        ? formData.customSubject
        : formData.subject,
      email: formData.email.trim(),
      phone: formData.phone.replace(/\D/g, ""),
      customSubject: undefined,
    };

    try {
      const response = await fetch("https://api.ficticia.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedFormData),
      });

      if (response.ok) {
        setSuccessMessage("Mensagem enviada com sucesso!");
        setFormData({ ...initForm });
      } else {
        throw new Error("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error(error);
      setErrors({ ...errors, form: "Erro ao enviar mensagem." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

      {/* Campos de entrada com placeholders */}
      <InputGroup>
        <Label htmlFor="name">Nome:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Digite seu nome"
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Digite seu email"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="phone">Telefone:</Label>
        <InputMask
          mask="(99) 99999-9999"
          value={formData.phone}
          onChange={handleChange}
        >
          {() => (
            <Input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(00) 00000-0000"
            />
          )}
        </InputMask>
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="subject">Assunto:</Label>
        <Select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um assunto</option>
          <option value="duvida">Dúvida</option>
          <option value="orcamento">Orçamento</option>
          <option value="sugestao">Sugestão</option>
          <option value="reclamacao">Reclamação</option>
          <option value="outro">Outro assunto</option>
        </Select>
        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
      </InputGroup>

      {/* Campo para assunto personalizado */}
      {isCustomSubjectRequired && (
        <InputGroup>
          <Label htmlFor="customSubject">Descreva o assunto:</Label>
          <Input
            type="text"
            id="customSubject"
            name="customSubject"
            value={formData.customSubject}
            onChange={handleChange}
            required
            placeholder="Digite aqui o assunto"
          />
          {errors.customSubject && (
            <ErrorMessage>{errors.customSubject}</ErrorMessage>
          )}
        </InputGroup>
      )}

      <InputGroup>
        <Label htmlFor="message">Mensagem:</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          maxLength={maxMessageLength}
          onPaste={(e) => e.preventDefault()}
          required
          placeholder="Escreva sua mensagem aqui"
        />
        {formData.message && (
          <Counter>{maxMessageLength - formData.message.length}</Counter>
        )}
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </InputGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </SubmitButton>

      {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
    </FormContainer>
  );
};

// Styled Components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 100%;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Counter = styled.small`
  padding: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none; /* Impede o redimensionamento do TextArea */
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.status.success};
  font-weight: bold;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.status.danger};
  font-size: 0.9em;
`;

export default ContactForm;
