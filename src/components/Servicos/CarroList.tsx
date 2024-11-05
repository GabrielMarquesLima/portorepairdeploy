"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import CarroForm from './CarroForm';
import CarroItem from './CarroItem';
import { Carro } from '../../CarroTypes';

export default function CarroList() {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editCarro, setEditCarro] = useState<Partial<Carro> | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCarros() {
      try {
        const response = await axios.get('http://localhost:8080/api/carros');
        setCarros(response.data);
        setLoading(false);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('Erro desconhecido');
        }
        setLoading(false);
      }
    }

    fetchCarros();
  }, []);

  const handleAddCarro = async (newCarro: Carro) => {
    try {
      await axios.post('http://localhost:8080/api/carros', newCarro);
      setCarros([...carros, newCarro]);
      setFeedbackMessage('Cadastro realizado com sucesso!');
    } catch (err) {
      setFeedbackMessage('Erro ao cadastrar carro. Verifique os campos.');
      console.error('Erro ao cadastrar carro:', err);
    }
  };

  const handleDeleteCarro = async (numChassi: string) => {
    try {
      await axios.delete(`http://localhost:8080/api/carros/${numChassi}`);
      setCarros(carros.filter((carro) => carro.numChassi !== numChassi));
      setFeedbackMessage('Carro deletado com sucesso!');
    } catch (err) {
      setFeedbackMessage('Erro ao deletar carro.');
      console.error('Erro ao deletar carro:', err);
    }
  };

  const handleEditCarro = async (carro: Carro) => {
    setEditCarro(carro);
  };

  const handleSaveEditCarro = async (updatedCarro: Carro) => {
    try {
      await axios.put(`http://localhost:8080/api/carros/${updatedCarro.numChassi}`, updatedCarro);
      setCarros(
        carros.map((carro) => (carro.numChassi === updatedCarro.numChassi ? updatedCarro : carro))
      );
      setFeedbackMessage('Edição realizada com sucesso!');
      setEditCarro(null);
    } catch (err) {
      setFeedbackMessage('Erro ao editar carro.');
      console.error('Erro ao editar carro:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Carros</h1>
      {feedbackMessage && (
        <div className="mb-4 p-2 bg-green-100 border border-green-300 text-green-700 rounded">
          {feedbackMessage}
        </div>
      )}
      <CarroForm onAddCarro={handleAddCarro} editCarro={editCarro} onSaveEdit={handleSaveEditCarro} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carros.map((carro) => (
          <CarroItem
            key={carro.numChassi}
            carro={carro}
            onDelete={handleDeleteCarro}
            onEdit={handleEditCarro}
          />
        ))}
      </ul>
    </div>
  );
}
