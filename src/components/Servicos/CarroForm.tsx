"use client";


import { Carro } from '../../CarroTypes';
import { useEffect, useState } from 'react';

interface CarroFormProps {
  onAddCarro: (carro: Carro) => void;
  editCarro: Partial<Carro> | null;
  onSaveEdit: (carro: Carro) => void;
}

export default function CarroForm({ onAddCarro, editCarro, onSaveEdit }: CarroFormProps) {
  const [carro, setCarro] = useState<Partial<Carro>>(editCarro || {});
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    setCarro(editCarro || {});
  }, [editCarro]);

  const handleSubmit = () => {
    if (!carro.numChassi || carro.numChassi.length !== 17) {
      setFormError('O número do chassi deve ter 17 caracteres.');
      return;
    }
    if (!carro.placaCarro || carro.placaCarro.length < 7 || carro.placaCarro.length > 8) {
      setFormError('A placa deve ter entre 7 e 8 caracteres.');
      return;
    }
    if (!carro.modeloCarro || carro.modeloCarro.length > 30) {
      setFormError('O modelo do carro deve ter no máximo 30 caracteres.');
      return;
    }
    if (!carro.montadoraCarro || carro.montadoraCarro.length > 20) {
      setFormError('A montadora deve ter no máximo 20 caracteres.');
      return;
    }
    if (!carro.anoCarro) {
      setFormError('O ano do carro é obrigatório.');
      return;
    }

    setFormError(null);

    if (editCarro) {
      onSaveEdit(carro as Carro);
    } else {
      onAddCarro(carro as Carro);
    }
    setCarro({});
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">{editCarro ? 'Editar Carro' : 'Cadastrar Novo Carro'}</h2>
      {formError && <p className="text-red-600 mb-2">{formError}</p>}
      <input
        type="text"
        placeholder="Número do Chassi (17 caracteres)"
        value={carro.numChassi || ''}
        onChange={(e) => setCarro({ ...carro, numChassi: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Placa (7 caracteres)"
        value={carro.placaCarro || ''}
        onChange={(e) => setCarro({ ...carro, placaCarro: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Modelo (até 30 caracteres)"
        value={carro.modeloCarro || ''}
        onChange={(e) => setCarro({ ...carro, modeloCarro: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Montadora (até 20 caracteres)"
        value={carro.montadoraCarro || ''}
        onChange={(e) => setCarro({ ...carro, montadoraCarro: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="date"
        placeholder='Ano do carro'
        value={carro.anoCarro || ''}
        onChange={(e) => setCarro({ ...carro, anoCarro: e.target.value })}
        className="border p-2 mr-2"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        {editCarro ? 'Salvar Alterações' : 'Cadastrar'}
      </button>
    </div>
  );
}
