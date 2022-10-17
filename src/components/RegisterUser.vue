<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <span class="close" @click="$emit('close-modal')">&times;</span>
        <div style="overflow-y: auto;" class="container">
          <form>
          <table>
            <tr>
              <td colspan="2">
                <label><b>Cliente</b></label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Nome" />
              </td>
              <td>
                <input type="text" placeholder="CPF" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="RG" />
              </td>
              <td>
                <input type="text" placeholder="Data Expedição" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Órgão Expedição" />
              </td>
              <td>
                <input type="text" placeholder="UF" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Data de nascimento" />
              </td>
              <td>
                <input type="text" placeholder="Sexo" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Estado Civil" />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <label><b>Endereço</b></label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="CEP" />
              </td>
              <td>
                <input type="text" placeholder="Logradouro" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Número" />
              </td>
              <td>
                <input type="text" placeholder="Complemento" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Bairro" />
              </td>
              <td>
                <input type="text" placeholder="Cidade" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="UF" />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button type="submit" @click="$emit('close-modal')">Salvar</button>
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
export default {};
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
input {
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
</style>