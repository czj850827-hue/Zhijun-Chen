import React from 'react';
import { BookOpen, Scale, Landmark, XCircle, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Differentiation Table */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">为什么选择 <span className="text-gold-500">贷略研习社</span></h2>
            <p className="text-gray-400">我们与传统贷款中介的本质区别</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Common Agents */}
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8">
               <div className="flex items-center gap-3 mb-6">
                 <XCircle className="w-8 h-8 text-red-500" />
                 <h3 className="text-xl font-bold text-red-200">传统贷款中介</h3>
               </div>
               <ul className="space-y-4 text-gray-400">
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                   赚取高额手续费（10%-20%），甚至吃点位。
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                   不考虑你的征信死活，只为了下款而下款。
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                   信息不透明，利用信息差收割客户。
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                   一次性买卖，后续问题无人负责。
                 </li>
               </ul>
            </div>

            {/* Us */}
            <div className="bg-gold-500/10 border border-gold-500/20 rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-bl-full -mr-4 -mt-4"></div>
               <div className="flex items-center gap-3 mb-6 relative z-10">
                 <CheckCircle className="w-8 h-8 text-gold-500" />
                 <h3 className="text-xl font-bold text-gold-100">贷略研习社</h3>
               </div>
               <ul className="space-y-4 text-gray-300 relative z-10">
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></span>
                   <span className="text-white font-medium">不赚利差，不收高额中介费。</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></span>
                   传授银行融资底层逻辑，让你自己掌握主动权。
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></span>
                   长远规划征信，确保未来5-10年的融资能力。
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></span>
                   终身陪伴式社群，持续更新银行最新政策。
                 </li>
               </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                 <BookOpen className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">金融财商教育</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 系统化课程体系，拆解银行产品逻辑、风控模型与评分标准。打破信息差，让你看懂金融机构的各种"套路"。
               </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                 <Scale className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">征信优化</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 针对征信花、查询多、负债高的情况，提供合规合法的优化方案。养护优质征信，为低息融资打好基础。
               </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center mb-6 text-gold-400">
                 <Landmark className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">债务重组规划</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 将网贷、小贷等高息负债，通过专业手段置换为银行先息后本、低息长周期的正规产品，大幅降低月供压力。
               </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;