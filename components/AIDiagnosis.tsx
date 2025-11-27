import React, { useState } from 'react';
import { Bot, Sparkles, Send } from 'lucide-react';
import { analyzeDebtSituation } from '../services/geminiService';

const AIDiagnosis: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    // Call Gemini API
    const result = await analyzeDebtSituation(input);
    
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section id="consultation" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase">AI 智能辅助</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            AI 债务初诊 <span className="text-gold-500">Demo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            输入您的基本情况（如：信用卡张数、负债总额、当前主要压力），让贷略研习社的AI助手为您提供初步的思维梳理。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-1 overflow-hidden">
            <div className="bg-slate-900/80 p-6 md:p-8 rounded-xl">
              
              {/* Chat Output Area */}
              {(response || isLoading) && (
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="text-white w-6 h-6" />
                     </div>
                     <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 text-gray-200 leading-relaxed">
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce delay-100"></span>
                            <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce delay-200"></span>
                            <span className="ml-2 text-sm text-gray-400">正在分析您的债务结构...</span>
                          </div>
                        ) : (
                          <>
                            <p>{response}</p>
                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gold-500 flex items-center gap-1">
                               <Sparkles className="w-3 h-3" />
                               <span>此为AI初步建议，具体实操方案请添加导师微信获取深度报告。</span>
                            </div>
                          </>
                        )}
                     </div>
                  </div>
                </div>
              )}

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="例如：我有5张信用卡共欠款20万，还有3个网贷共5万，每个月工资不够还利息，该怎么办？"
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl p-4 pr-14 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all min-h-[100px] resize-none"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-gold-500 hover:bg-gold-600 rounded-lg flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              * 注：您的信息仅用于即时AI分析，不会被永久存储或用于其他用途。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnosis;