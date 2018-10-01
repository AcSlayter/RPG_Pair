package com.map;

import com.error.InvalidApiRequestException;
import com.interphase.IApi;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class MapBoardApi implements IApi {
    public static final String NAME = "mapBoard";

    @Override
    public byte[] getByteResponse(String requestURL) throws InvalidApiRequestException {
        String subArray = getSubArray(requestURL, NAME);

        URL myURL = null;
        try {
            myURL = new URL("http://192.168.86.127:8090/"+ subArray);
            URLConnection myURLConnection = myURL.openConnection();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(myURLConnection.getInputStream()));
            String getResponse = bufferedReader.readLine();
            bufferedReader.close();

            return getResponse.getBytes();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        throw new InvalidApiRequestException();
    }
}
