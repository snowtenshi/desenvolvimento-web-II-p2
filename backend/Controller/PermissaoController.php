<?php

namespace App\Controller;

use App\Controller\AutorizadoController;

$autorizado = new AutorizadoController();
$this->$autorizado->autorizado();

class PermissaoController {
  private $ips_permitidos;
  private $origensPermitidas;
  
  public function __construct() {
    $this->ips_permitidos = ['::1', '123.123.123.124'];
    $this->origensPermitidas = ['127.0.0.1:5500','http://192.168.56.1'];
  }

  public function verOrigem() {
    if(!in_array($_SERVER['HTTP_ORIGIN'], $this->origensPermitidas)){
        echo json_encode(['status'=>false,'mensagem' => 'Acesso nao autorizado para origem'], 403);
        exit;
    }
  }

  public function verIP() {
    if (!in_array($_SERVER['REMOTE_ADDR'], $this->ips_permitidos)) {
        echo json_encode(['status'=>false,'mensagem' => 'Acesso nao autorizado por IP'], 403);
        exit;
    }
  }
}