<?php

namespace App\Controller;

use App\Model\Model;

class EnderecoController {

    private $db;
    private $endereco;

    public function __construct($endereco) {
        $this->db = new Model();
        $this->endereco = $endereco;
    }
    public function select(){
        $endereco = $this->db->select('endereco');
        return $endereco;
    }
    public function selectId($id){
        $endereco = $this->db->select('endereco',['id'=>$id]);
        return  $endereco;
    }

    public function insert(){
        if($this->db->insert('endereco', [
          'cep'=>$this->endereco->getCep(), 
          'rua'=>$this->endereco->getRua(),
          'bairro'=>$this->endereco->getBairro(),
          'cidade'=>$this->endereco->getCidade(),
          'uf'=>$this->endereco->getUf(),
          'iduser'=>$this->endereco->getIduser()

        ])){
          return true;
        }
        return false;
    }
    public function update($newData,$conditions){
        if($this->db->update('endereco', $newData, ['iduser'=>$conditions])){
            return true;
        }
        return false;
    }
    public function delete( $conditions){
        if($this->db->delete('endereco', ['id'=>$conditions])){
            return true; 
        }
        return false;
        
    }
}
