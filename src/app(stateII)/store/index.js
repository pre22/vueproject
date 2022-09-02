import { createStore } from 'vuex'
import UserModule from './module/user.js'
import AirportsModule from './module/airports.js'

export default createStore({
    modules: {
        user: UserModule,
        airports: AirportsModule
    }
})