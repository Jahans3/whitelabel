/**
 * Created by joshjahans on 14/03/2017.
 */
import { UPDATE_ROUTE } from './actionTypes'

const initialState = {
  index: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROUTE:
      const { payload: { index } } = action
      return {
        ...state,
        index
      }
  }
}
