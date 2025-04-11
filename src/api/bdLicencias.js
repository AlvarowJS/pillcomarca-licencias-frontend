import axios from 'axios'

const bdLicencias = axios.create({
    // baseURL: 'https://sv-yptplguxwm.cloud.elastika.pe/api'
     baseURL: 'http://sv-nlaqt2o6tr.cloud.elastika.pe:81/api'
})

export default bdLicencias