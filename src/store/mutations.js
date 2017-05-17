/**
 * Created by Administrator on 2017/4/14.
 */
import * as types from './types'
export default {
    [types.SHOWNAV](state){
        state.bnav=true
    },
    [types.SHOWFOOT](state){
        state.bfoot=true
    },
    [types.HIDENAV](state){
        state.bnav=false
    },
    [types.HIDEFOOT](state){
        state.bfoot=false
    },
    [types.HIDELOADING](state){
        state.bloading=false
    },
    [types.SHOWLOADING](state){
        state.bloading=true
    }
}