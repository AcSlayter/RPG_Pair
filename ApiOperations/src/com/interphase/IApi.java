package com.interphase;

import com.error.InvalidApiRequestException;

public interface IApi {
    byte [] getByteResponse (String requestURL) throws InvalidApiRequestException;
    default String getSubArray(String requestURL, String name) {
        return requestURL.split(name)[1];
    }

}
