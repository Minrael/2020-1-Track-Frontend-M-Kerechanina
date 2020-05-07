import { TApiResponse } from './utils/types';
import {TranslateUtils} from './utils/index';
//import { langValidate } from './utils/inputValidate'

//let a = langValidate(['my name is john cena'], 'en-ru');
//console.log(langValidate(['my name is john cena'], 'en-ru'));


    TranslateUtils(['my name is john cena'],'en-ru')
    .then((data:TApiResponse) => {
        console.log(data);
    });

/*TranslateUtils('my name is john cena', 'ee-fr')
    .then((data:TApiResponse) => {
        console.log(data);
    })*/


