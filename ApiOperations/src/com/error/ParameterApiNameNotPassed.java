package com.error;

public class ParameterApiNameNotPassed extends ParameterException {
    public ParameterApiNameNotPassed(String requestURL) {
        System.out.println(requestURL + "NOT PASSED");
    }
}
