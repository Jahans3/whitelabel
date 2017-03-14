/**
 * Created by joshjahans on 14/03/2017.
 */
import { UPDATE_ROUTE } from './actionTypes'

export const updateRoute = (index, route) => ({
  type: UPDATE_ROUTE,
  payload: { index }
})
