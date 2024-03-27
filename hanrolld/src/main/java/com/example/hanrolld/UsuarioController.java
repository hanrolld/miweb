package com.example.hanrolld;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping(value="/login")
	public ResponseEntity<Object> create(@RequestBody Usuario username){ 
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			Usuario res = usuarioService.saveUsuario(username);  
			return new ResponseEntity<Object>(res,HttpStatus.OK);
		} 
		catch (Exception e) {
			map.put("message", e.getMessage());
			return new ResponseEntity<>( map, HttpStatus.INTERNAL_SERVER_ERROR);
		} 
 	}

    @GetMapping("/{username}")
    public Usuario getUsuarioByUsername(@PathVariable String username) {
        return usuarioService.findByUsername(username);
    }
    
    @GetMapping(value = "/ping")
	public ResponseEntity<Object> getPing() {
		return new ResponseEntity<Object>("pong", HttpStatus.OK);
	}
}