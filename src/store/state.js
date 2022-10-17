const state = {
  isAuthenticated: false,
  snackbar: {
    show: false,
    text: '',
    timeout: 3000,
    color: 'primary',
  },
  user: {
    // clienteId: 0,
    cpf: "",
    nome: "",
    rg: "",
    dataExpedicao: "",
    orgaoExpedicao: "",
    uf: "",
    dataNascimento: "",
    sexo: "",
    estadoCivil: "",
    endereco: {
      // enderecoId: 0,
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  },
}

export default state
