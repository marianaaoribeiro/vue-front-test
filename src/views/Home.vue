<template>
  <div>
    <div class="save-btn">
      <button @click="showModal = true">Cadastrar Cliente</button>
    </div>
    <label class="container"
      >Nome
      <input v-model="filterBy" value="name" type="radio" />
      <span class="checkmark"></span>
    </label>
    <label class="container"
      >CPF
      <input v-model="filterBy" type="radio" value="cpf" />
      <span class="checkmark"></span>
    </label>
    <input
      v-model="search"
      type="text"
      id="searchInput"
      @input="filterData()"
      placeholder="Buscar.."
    />
    <button @click="getClients">Limpar Filtros</button>
    <div class="table">
      <table>
        <tr>
          <th v-for="(item, index) in headers" :key="index">
            {{ item }}
          </th>
        </tr>
        <tr v-if="isLoadingData">
          <td colspan="16"><page-loader /></td>
        </tr>
        <tr v-else v-for="(item, index) in clients" :key="index">
          <td><span @click="deleteClient(item.clienteId)">&times;</span></td>
          <td>{{ item.cpf }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.rg }}</td>
          <td>{{ userDate(item.dataExpedicao) }}</td>
          <td>{{ item.orgaoExpedicao }}</td>
          <td>{{ item.uf }}</td>
          <td>{{ userDate(item.dataNascimento) }}</td>
          <td>{{ item.sexo }}</td>
          <td>{{ item.estadoCivil }}</td>
          <td>{{ item.endereco.cep }}</td>
          <td>{{ item.endereco.logradouro }}</td>
          <td>{{ item.endereco.numero }}</td>
          <td>{{ item.endereco.complemento }}</td>
          <td>{{ item.endereco.bairro }}</td>
          <td>{{ item.endereco.cidade }}</td>
          <td>{{ item.endereco.uf }}</td>
        </tr>
      </table>
    </div>
    <register-user v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>
  
  <script>
import { auth as api } from "@/api";
import RegisterUser from "@/components/RegisterUser.vue";
import PageLoader from "@/components/PageLoader.vue";
import { formatDate } from "@/shared/mixins";
export default {
  name: "HomeView",
  components: {
    RegisterUser,
    PageLoader,
  },
  mixins: [formatDate],
  data() {
    return {
      showModal: false,
      headers: [
        "Excluir",
        "CPF",
        "Nome",
        "RG",
        "Data Expedição",
        "Órgão Expedição",
        "UF",
        "Data de nascimento",
        "Sexo",
        "Estado Civil",
        "CEP",
        "Logradouro",
        "Número",
        "Complemento",
        "Bairro",
        "Cidade",
        "UF",
      ],
      clients: [],
      isLoadingData: false,
      search: "",
      filterBy: "name",
    };
  },
  beforeMount() {
    document.getElementsByTagName("body")[0].style.background = ""
    this.getClients();
  },
  methods: {
    filterData() {
      let filter =
        this.filterBy == "name"
          ? this.clients.filter((el) => el.nome.includes(this.search))
          : this.clients.filter((el) => el.cpf.includes(this.search));
      this.clients = filter;
    },
    getClients() {
      this.search = "";
      this.isLoadingData = true;
      api
        .get(`/v1/Cliente/Listar`)
        .then((response) => {
          this.clients = response.data;
        })
        .finally(() => {
          this.isLoadingData = false;
        });
    },
    deleteClient(id) {
      if (confirm("Deseja excluir esse Cliente?")) {
        api
          .delete(`/v1/Cliente/Excluir/${id}`)
          .then((response) => {
            this.clients = response.data;
          })
          .finally(() => {
            this.getClients();
          });
      }
    },
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.inner {
  margin: auto;
  width: 65%;
}
.top-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}
.add-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  width: 160px;
}
h6 {
  font-size: 25px;
  font-weight: 500;
}
button {
  background-color: #3b5274;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
}
.save-btn {
  text-align: right;
  margin-top: 50px;
  margin: 1% 6% 0 6%;
}

.table {
  overflow-x: auto;
  margin: 1% 6% 0 6%;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
}
.table::-webkit-scrollbar {
  width: 10px;
}

.table::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.table::-webkit-scrollbar-thumb {
  background: #9c667d;
  border-radius: 15px;
}

.table::-webkit-scrollbar-thumb:hover {
  background: #ce938b;
}
#searchInput {
  background-position: 10px 10px;
  width: 20%;
  margin: 1%;
  font-size: 16px;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
}

/* The container */
.container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 23px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}
</style>