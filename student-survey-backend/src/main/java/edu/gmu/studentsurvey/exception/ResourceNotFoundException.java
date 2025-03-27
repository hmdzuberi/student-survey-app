/**
 * ResourceNotFoundException is a custom exception class that is thrown
 * when a requested resource is not found. It is annotated with 
 * @ResponseStatus to return an HTTP 404 (NOT_FOUND) status code 
 * when this exception is thrown in a Spring Boot application.
 */

package edu.gmu.studentsurvey.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}