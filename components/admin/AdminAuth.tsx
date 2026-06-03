"use client";

import { useState, useEffect } from "react";
import { Lock, User } from "lucide-react";
import { motion } from "framer-motion";

export function AdminAuth({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Verificar se já logou na sessão atual
    const loggedIn = sessionStorage.getItem("adminAuth");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "Testevieira" && password === "Vieiraveiculos1") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  if (isChecking) {
    return <div className="h-screen bg-background-dark flex items-center justify-center"></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-background-dark flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background-card border border-white/5 p-8 rounded-2xl shadow-2xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-2">Painel Administrativo</h1>
            <p className="text-text-secondary">Faça login para acessar o sistema da Vieira Veículos.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Usuário</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors"
                  placeholder="Digite seu usuário"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-brand-red-light text-sm font-medium text-center bg-brand-red/10 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button 
              type="submit"
              className="w-full bg-brand-red hover:bg-brand-red-light text-white py-3 rounded-lg font-bold transition-colors shadow-lg shadow-brand-red/20"
            >
              Acessar Painel
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
