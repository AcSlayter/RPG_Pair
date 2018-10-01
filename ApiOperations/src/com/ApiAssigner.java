package com;


import com.error.ParameterApiNameNotPassed;
import com.error.ParameterException;
import com.exception.ApiNotFoundException;
import com.interphase.IApi;
import com.map.MapBoardApi;

public class ApiAssigner extends ApiHandler {
    private MapBoardApi mapBoardApi = new MapBoardApi();

    public byte[] getByteResponse(String request) throws Exception {
        String apiName = getApiString(request);
        return getApi(apiName).getByteResponse(request);
    }

    public IApi getApi(String apiName) throws ApiNotFoundException {
        switch (apiName) {
            case MapBoardApi.NAME : return this.mapBoardApi;
        }
        throw new ApiNotFoundException(apiName);
    }

    private String getApiString(String requestURL) throws ParameterException {
        String[] api = requestURL.split("api");
        if (api.length == 1 ) {
            throw new ParameterApiNameNotPassed(requestURL);
        }

        String[] path = api[1].split("/");
        if (path.length == 0) {
            throw new ParameterApiNameNotPassed(requestURL);
        }

        return path[1];
    }
}
