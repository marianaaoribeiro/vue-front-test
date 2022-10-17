import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export const formatDate = {
  methods: {
    dateField(v) {
        let validation = ''
        if(!v && !v.length === 10){
            validation = 'Data inválida'
        } else if(!dayjs(v, 'DD/MM/YYYY', true).isValid()){
            validation = 'Data inválida'
        }else if(!dayjs(v, 'DD/MM/YYYY').isAfter('01/01/1900')){
            validation = 'Data inválida'
        }else{
            validation = ''
        }
        return validation
      },
    systemDate(date, format = null, outputFormat = 'YYYY-MM-DD') {
      if (!date) return null

      const parsedDate = dayjs(date, 'DD/MM/YYYY')

      if (!format) return dayjs(parsedDate).format(outputFormat)

      return dayjs(parsedDate, format).format(outputFormat)
    },

    userDate(date, outputFormat = 'DD/MM/YYYY') {
      if (date) {
        date = new Date(date)
        date = new Date(
          date.getTime() + Math.abs(date.getTimezoneOffset() * 60000)
        )
        return dayjs(date).format(outputFormat)
      }
      return null
    },  
  },
}



