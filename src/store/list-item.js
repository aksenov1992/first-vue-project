export default {
    state: {
        dishes: [],
        group: []
   },
    mutations: {},
    getters: {
        dishFilter: state => id => {
            const type = 'DISH';
            return state.dishes.filter(el => el.type === type && !el.deleted && el.grp_id === id);
        },
        groupFilter: state => {
            return state.group.filter(el => !el.deleted);
        }
    },
    actions: {
        /*loadDish() {
            this.$http.get('https://data-sibers.firebaseio.com/dish-arr/0/dishes.json')
            .then(response => {
                   return response.json();
               })
            .then(data => {
               this.state.dishes = data;
            })
        }*/
    }
}