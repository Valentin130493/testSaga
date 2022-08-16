import {all, call} from "redux-saga/effects";

import productSaga from "./product";
import userSaga from "./user";

export function* rootSaga() {
    yield all([
        call(productSaga),
        call(userSaga),
    ]);
}