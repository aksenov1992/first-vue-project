export default {
    state: {
        dishes: [
            {
                id:  '01',
                grp_id: '',
                name: 'ложка',
                color: '',
                font_color: '',
                price: 1
            },
            {
                id:  '02',
                grp_id: '',
                name: 'вилка',
                color: '',
                font_color: '',
                price: 2
            },
            {
                id:  '03',
                grp_id: '',
                name: 'нож',
                color: '',
                font_color: '',
                price: 3
            },
            {
                id:  '04',
                grp_id: '',
                name: 'доска',
                color: '',
                font_color: '',
                price: 4
            }]
   },

    actions: {
        onClickButton(context, payload) {
            context.commit('addItemToCheckList', payload);
        }
    }
}