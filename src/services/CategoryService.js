import $ from 'jquery'
import axios from 'axios'
import URLS from './URLS'
import AccountService from './AccountService'

const urlService = new URLS();
const accountService = new AccountService();

export default class CategoryService {
    getCategories() {
        accountService.createHeaders();
        let url = urlService.CategoryURL;
        return axios.get(url);
    }
    addCategory(category) {
        accountService.createHeaders();
        let url = urlService.CategoryURL;
        axios.post(url, category)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
    editCategory(category) {
        accountService.createHeaders();
        let url = urlService.CategoryURL;
        axios.put(url, category)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
    deleteCategory(id) {
        accountService.createHeaders();
        let url = urlService.CategoryURL + '/' + id;
        axios.delete(url)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
}