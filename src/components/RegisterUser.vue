<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <span class="close" @click="$emit('close-modal')">&times;</span>
        <div style="overflow-y: auto" class="container">
          <form>
            <table>
              <tr>
                <td colspan="2">
                  <label><b>Cliente</b></label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.nome"
                    type="text"
                    placeholder="Nome *"
                    @input="requiredField(user.nome)"
                  />
                  <span class="error-message">{{
                    requiredField(user.nome)
                  }}</span>
                </td>
                <td>
                  <input
                    v-mask="'###.###.###-##'"
                    v-model="user.cpf"
                    type="text"
                    placeholder="CPF"
                    @input="cpfField(user.cpf)"
                  />
                  <span class="error-message">{{ cpfField(user.cpf) }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.rg"
                    type="text"
                    placeholder="RG"
                    @input="requiredField(user.rg)"
                  />
                  <span class="error-message">{{
                    requiredField(user.rg)
                  }}</span>
                </td>
                <td>
                  <input
                    v-model="user.dataExpedicao"
                    type="text"
                    v-mask="'##/##/####'"
                    placeholder="Data Expedição"
                    @input="dateField(user.dataExpedicao)"
                  />
                  <span class="error-message">{{
                    dateField(user.dataExpedicao)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.orgaoExpedicao"
                    type="text"
                    placeholder="Órgão Expedição"
                    @input="requiredField(user.orgaoExpedicao)"
                  />
                  <span class="error-message">{{
                    requiredField(user.orgaoExpedicao)
                  }}</span>
                </td>
                <td>
                  <input
                    v-model="user.uf"
                    type="text"
                    placeholder="UF"
                    @input="requiredField(user.uf)"
                  />
                  <span class="error-message">{{
                    requiredField(user.uf)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.dataNascimento"
                    type="text"
                    v-mask="'##/##/####'"
                    placeholder="Data de nascimento"
                    @input="dateField(user.dataNascimento)"
                  />
                  <span class="error-message">{{
                    dateField(user.dataNascimento)
                  }}</span>
                </td>
                <td>
                  <select v-model="user.sexo" @input="requiredField(user.sexo)">
                    <option value="" disabled selected>Selecione o sexo</option>
                    <option
                      v-for="(item, index) in sexTypes"
                      :key="index"
                      :value="item.text"
                    >
                      {{ item.text }}
                    </option>
                  </select>
                  <span class="error-message">{{
                    requiredField(user.sexo)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    v-model="user.estadoCivil"
                    @input="requiredField(user.estadoCivil)"
                  >
                    <option value="" disabled selected>
                      Selecione o Estado Civil
                    </option>
                    <option
                      v-for="(item, index) in civilStates"
                      :key="index"
                      :value="item.text"
                    >
                      {{ item.text }}
                    </option>
                  </select>
                  <span class="error-message">{{
                    requiredField(user.estadoCivil)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <label><b>Endereço</b></label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.endereco.cep"
                    type="text"
                    placeholder="CEP"
                    @input="requiredField(user.endereco.cep)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.cep)
                  }}</span>
                </td>
                <td>
                  <input
                    v-model="user.endereco.logradouro"
                    type="text"
                    placeholder="Logradouro"
                    @input="requiredField(user.endereco.logradouro)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.logradouro)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.endereco.numero"
                    type="text"
                    placeholder="Número"
                    @input="requiredField(user.endereco.numero)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.numero)
                  }}</span>
                </td>
                <td>
                  <input
                    v-model="user.endereco.complemento"
                    type="text"
                    placeholder="Complemento"
                    @input="requiredField(user.endereco.complemento)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.complemento)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.endereco.bairro"
                    type="text"
                    placeholder="Bairro"
                    @input="requiredField(user.endereco.bairro)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.bairro)
                  }}</span>
                </td>
                <td>
                  <input
                    v-model="user.endereco.cidade"
                    type="text"
                    placeholder="Cidade"
                    @input="requiredField(user.endereco.cidade)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.cidade)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    v-model="user.endereco.uf"
                    type="text"
                    @input="requiredField(user.endereco.uf)"
                  />
                  <span class="error-message">{{
                    requiredField(user.endereco.uf)
                  }}</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button type="submit" @click="$emit('close-modal')">
                    Salvar
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { validate as validateCPF } from "gerador-validador-cpf";
import { formatDate } from "@/shared/mixins";
export default {
  name: "RegisterUser",
  mixins: [formatDate],
  data() {
    return {
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
      sexTypes: [
        {
          text: "Feminino",
        },
        {
          text: "Masculino",
        },
        {
          text: "Não-Binário",
        },
      ],
      civilStates: [
        {
          text: "Solteiro(a)",
        },
        {
          text: "Casado(a)",
        },
        {
          text: "Divorciado(a)",
        },
        {
          text: "Viuvo(a)",
        },
      ],
    };
  },
  methods: {
    requiredField(v) {
      return v ? "" : "Campo é obrigatório";
    },
    cpfField(v) {
      return !v
        ? "Campo é obrigatório"
        : !validateCPF(v)
        ? "CPF é inválido"
        : "";
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  align-content: center;
  justify-content: center;
  background-color: white;
  display: flex;
  height: 50%;
  width: 40%;
  margin-top: 10%;
  padding: 3%;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

button {
  background-color: #3b5274;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 10px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
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

.close {
  position: fixed;
  margin-left: 40%;
  top: 0;
  color: #3b5274;
  font-size: 35px;
  font-weight: bold;
}

/* Close button on hover */
.close:hover,
.close:focus {
  color: #304361;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 11px;
}
</style>