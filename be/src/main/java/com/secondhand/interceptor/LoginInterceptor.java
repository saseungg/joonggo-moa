package com.secondhand.interceptor;

import com.secondhand.exception.login.ExpiredTokenException;
import com.secondhand.exception.login.ManipulatedTokenException;
import com.secondhand.exception.login.NoAuthorizationException;
import com.secondhand.exception.login.NoBearerException;
import com.secondhand.user.login.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RequiredArgsConstructor
public class LoginInterceptor implements HandlerInterceptor {

    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (request.getHeader("Authorization") == null) {
            throw new NoAuthorizationException();
        }

        String token = request.getHeader("Authorization").split(" ")[1];
        if (!request.getHeader("Authorization").split(" ")[0].equals("Bearer")) {
            throw new NoBearerException();
        }

        if (!jwtUtil.validateTokenIsManipulated(token)) {
            throw new ManipulatedTokenException();
        }

        if (!jwtUtil.validateTokenIsExpired(token)) {
            throw new ExpiredTokenException();
        }

        return true;
    }
}
