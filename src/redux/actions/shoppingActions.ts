import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL } from '../../utils'
import { FoodAvailability } from '../models'

export interface AvailabilityAction {
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability
}

export interface ShoppingErrorAction {
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction

// User actions trigger from components

export const onAvailability = () => {
    return async (dispatch: Dispatch<ShoppingAction>) => {

        try {

            const response = await axios.get<FoodAvailability>(`${BASE_URL}food/availability/78787878`)

            if (!response) {
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            } else {

                // save our location in local storage
                dispatch({
                    type: 'ON_AVAILABILITY',
                    payload: response.data
                })
            }

        } catch (error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error
            })
        }

    }
}