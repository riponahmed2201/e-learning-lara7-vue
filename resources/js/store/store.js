export default {
    state:{

        category:[],
    },
    getters:{
        categoryList(state){
            return state.category
        }
    },
    actions:{

        getCategoryList(context){
            axios.get('/categoryList')
                .then((reposnse)=>{
                    //pass data to mutation // mutation direct data receive korte pare na tai categoryList function newa hoiche
                    context.commit('categoryList',reposnse.data.categoryList)
            })
        }
    },
    mutations:{
        categoryList(state, responseData){
            return state.category = responseData;
        }
    }
}
