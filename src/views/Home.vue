<template>
  <div>
    <div class="save-btn">
      <button @click="showModal = true">Cadastrar Cliente</button>
    </div>
    <div class="container">
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
    <register-user
      v-show="showModal"
      @close-modal="showModal = false"
    />
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
    };
  },
  beforeMount() {
    this.getClients();
  },
  methods: {
    getClients() {
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
    saveClient() {
      const data = this.$store.getters.user;
      api
        .post(`/v1/Cliente/Adicionar/`, data)
        .then((response) => {
          console.log(response);
          // this.clients = response.data;
        })
        .finally(() => {
          // this.showModal = false;
          // this.getClients();
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

.container {
  overflow-x: auto;
  margin: 1% 6% 0 6%;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
}
.container::-webkit-scrollbar {
  width: 10px;
}

.container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.container::-webkit-scrollbar-thumb {
  background: #9c667d;
  border-radius: 15px;
}

.container::-webkit-scrollbar-thumb:hover {
  background: #ce938b;
}
</style>