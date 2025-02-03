package com.cesde.cesde.helpers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseHandler {
	
	/**
	 * Genera un mensaje de respuesta con un objeto de respuesta
	 * @param message
	 * @param status
	 * @param responseObj
	 * @param code
	 * @return
	 */
	public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj, String code) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("message", message);
		map.put("status", status.value());
		map.put("data", responseObj);
		map.put("code", code);

		return new ResponseEntity<Object>(map, status);
	}
}
