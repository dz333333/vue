/**
 * Created by Administrator on 2017/4/14.
 */
import * as types from './types'
export default {
    hidefoot:({commit,state})=>{
        commit(types.HIDEFOOT)
    },
    hidenav:({commit,state})=>{
        commit(types.HIDENAV)
    },
    showfoot:({commit,state})=>{
        commit(types.SHOWFOOT)
    },
   shownav:({commit,state})=>{
        commit(types.SHOWNAV)
    },
    hideloading:({commit,state})=>{
        commit(types.HIDELOADING)
    },
    showloading:({commit,state})=>{
        commit(types.SHOWLOADING)
    },

}