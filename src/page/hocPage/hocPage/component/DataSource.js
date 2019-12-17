let DataSource = {
    getComments: () => {
        return ['comment1', 'comment2']
    },
    getBlogPost: () => {
        return 'BlogPost Content'
    },
    addChangeListener: () => {
        console.log('addChangeListener');
    },
    removeListener: () => {
        console.log('removeListener');
    }
};
export default DataSource;