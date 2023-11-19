<?php
 namespace App\Controller;

class AutorizadoController {
  //private $ips_permitidos = ['::1', '123.123.123.124', '10.67.254.101', '10.67.254.50', '10.67.254.99'];
  //private $origensPermitidas = ['localhost'];
  
  public function __construct() {
  //$this->$ips_permitidos = ['::1', '123.123.123.124', '10.67.254.101', '10.67.254.50', '10.67.254.99'];
  //$this->$origensPermitidas = ['localhost'];
  }
  
  public function autorizado() {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: * ' );
    header('Access-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    $this->verificarIP(['::1', '127.0.0.1', '10.67.254.101', '10.67.254.50', '10.67.254.99', '10.67.254.46']);
    //$this->verificaOrigem(['localhost']);
  }
  public function verificarIP($ipList) {
    if (!in_array($_SERVER['REMOTE_ADDR'], $ipList)) {
        echo json_encode(['error' => 'Acesso nao autorizado por IP'], 403);
        exit;
    }
  }
/*   public function verificaOrigem($origemList) {
    if(!in_array($_SERVER['HTTP_ORIGIN'], $origemList)){
      echo json_encode(['error' => 'Acesso nao autorizado'], 403);
      exit;
    }
  } */
} 
?>