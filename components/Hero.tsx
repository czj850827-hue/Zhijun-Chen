import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 text-sm font-medium tracking-wide">专注金融财商培养 · 拒绝中介套路</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            掌握银行<br />
            <span className="gradient-text">融资底层逻辑</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            从高息网贷到低息银行产品，不仅仅是置换，更是思维的跃迁。我们帮助你优化征信，成为自己的融资专家。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              立即咨询导师 <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              了解我们的模式
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">5000+</div>
              <div className="text-gray-500 text-sm">学员成功上岸</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">3.0%</div>
              <div className="text-gray-500 text-sm">平均置换年化低至</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">1对1</div>
              <div className="text-gray-500 text-sm">深度定制方案</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="glass-card p-8 rounded-2xl relative z-20 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">征信优化成功</h3>
                  <p className="text-gray-400 text-sm">负债结构已重组</p>
                </div>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                   <span className="text-gray-400">原综合利息</span>
                   <span className="text-red-400 font-mono line-through">18.5%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gold-500/10 border border-gold-500/20 rounded-lg">
                   <span className="text-gold-400 font-bold">优化后利息</span>
                   <span className="text-gold-400 font-mono font-bold text-xl">3.2%</span>
                </div>
             </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl absolute -bottom-10 -right-10 z-10 w-64 animate-bounce-slow">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <TrendingUp className="w-5 h-5" />
               </div>
               <div>
                  <div className="text-white font-bold">额度提升</div>
                  <div className="text-gray-400 text-xs">+500,000 CNY</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;