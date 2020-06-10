import React from 'react'
import {
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const showStart = (star, pad) => {
    if (star === 5) {
        return (
            <>
                <FontAwesome
                    name="star"
                    size={15}
                    color={'#c9cc1f'}
                    style={{ paddingRight: pad }}
                />
                <FontAwesome
                    name="star"
                    size={15}
                    color={'#c9cc1f'}
                    style={{ paddingRight: pad }}
                />
                <FontAwesome
                    name="star"
                    size={15}
                    color={'#c9cc1f'}
                    style={{ paddingRight: pad }}
                />
                <FontAwesome
                    name="star"
                    size={15}
                    color={'#c9cc1f'}
                    style={{ paddingRight: pad }}
                />
                <FontAwesome
                    name="star"
                    size={15}
                    color={'#c9cc1f'}
                    style={{ paddingRight: pad }}
                />
            </>
        )
    } else {
        if (star === 4) {
            return (
                <>
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                        style={{ paddingRight: pad }}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                        style={{ paddingRight: pad }}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                        style={{ paddingRight: pad }}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                        style={{ paddingRight: pad }}
                    />
                    <FontAwesome
                        name="star-o"
                        size={15}
                        color={'#c9cc1f'}
                        style={{ paddingRight: pad }}
                    />
                </>
            )
        } else {
            if (star === 3) {
                return (
                    <>
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                            style={{ paddingRight: pad }}
                        />
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                            style={{ paddingRight: pad }}
                        />
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                            style={{ paddingRight: pad }}
                        />
                        <FontAwesome
                            name="star-o"
                            size={15}
                            style={{ paddingRight: pad }}
                            color={'#c9cc1f'}
                        />
                        <FontAwesome
                            name="star-o"
                            size={15}
                            color={'#c9cc1f'}
                            style={{ paddingRight: pad }}
                        />
                    </>
                )
            } else {
                if (star === 2) {
                    return (
                        <>
                            <FontAwesome
                                name="star"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star"
                                size={15}
                                style={{ paddingRight: pad }}
                                color={'#c9cc1f'}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                        </>
                    )
                } else {
                    return (
                        <>
                            <FontAwesome
                                name="star"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                                style={{ paddingRight: pad }}
                            />
                        </>
                    )
                }
            }
        }
    }
}
export default showStart