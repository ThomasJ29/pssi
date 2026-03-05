import React, { useState } from 'react';

const PSSIGenerator = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    pwdLength: '12',
    mfa: 'Obligatoire',
    manager: 'Bitwarden',
    remoteWork: 'Autorisé avec VPN'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* SECTION FORMULAIRE */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Configuration de votre PSSI</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom de l'entreprise</label>
              <input 
                name="companyName" 
                onChange={handleChange}
                className="w-full p-2 border rounded-md" 
                placeholder="Ex: Ma Super TPE"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Longueur des mots de passe</label>
              <select name="pwdLength" onChange={handleChange} className="w-full p-2 border rounded-md bg-white">
                <option value="8">8 caractères (Basique)</option>
                <option value="12">12 caractères (Conseillé)</option>
                <option value="16">16 caractères (Fort)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Double Authentification (MFA)</label>
              <select name="mfa" onChange={handleChange} className="w-full p-2 border rounded-md bg-white">
                <option value="Obligatoire">Obligatoire pour tous</option>
                <option value="Optionnelle">Optionnelle</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Politique de Télétravail</label>
              <select name="remoteWork" onChange={handleChange} className="w-full p-2 border rounded-md bg-white">
                <option value="Interdit">Interdit</option>
                <option value="Autorisé avec VPN">Autorisé avec VPN</option>
                <option value="Libre">Libre (Accès direct)</option>
              </select>
            </div>
          </div>
          
          <button 
            onClick={() => window.print()} 
            className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Télécharger en PDF
          </button>
        </div>

        {/* SECTION RENDU DU DOCUMENT */}
        <div id="pssi-document" className="bg-white p-10 rounded-xl shadow-inner border border-gray-300 prose">
          <h1 className="text-center text-3xl font-serif underline">PSSI Simplifiée</h1>
          <p className="text-right italic">Entreprise : {formData.companyName || "________________"}</p>
          
          <h3 className="text-blue-800 border-b">1. Authentification</h3>
          <p>
            Tous les collaborateurs doivent utiliser des mots de passe d'une longueur minimale de 
            <strong> {formData.pwdLength} caractères</strong>. 
            L'usage d'un gestionnaire de mots de passe (type {formData.manager}) est vivement recommandé.
          </p>
          <p>
            La double authentification (MFA) est <strong>{formData.mfa.toLowerCase()}</strong> sur l'ensemble des services critiques.
          </p>

          <h3 className="text-blue-800 border-b">2. Télétravail et Mobilité</h3>
          <p>
            Le travail à distance est <strong>{formData.remoteWork.toLowerCase()}</strong>. 
            En cas de perte d'un équipement mobile, le salarié s'engage à prévenir la direction sous 2h.
          </p>

          <div className="mt-20 flex justify-between">
            <div className="text-sm">Signature de l'employeur</div>
            <div className="text-sm">Signature du salarié (précédé de "Lu et approuvé")</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PSSIGenerator;