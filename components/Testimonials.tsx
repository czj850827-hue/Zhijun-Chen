import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const cases = [
    {
      title: "网贷全面上岸",
      user: "张先生 (电商创业者)",
      before: "网贷15家，月还款4.5万",
      after: "银行低息贷，月还款8000",
      desc: "因为资金周转不懂规划，点了太多网贷，利息高到吓人。加入贷略后，老师帮我梳理了征信，花了3个月养护，最后成功置换了一笔3.8%的银行经营贷。"
    },
    {
      title: "高息置换低息",
      user: "李女士 (企业高管)",
      before: "信用卡分期利息15%+",
      after: "先息后本3.2%",
      desc: "一直以为信用卡分期很划算，上课后才算明白真实年化有多高！按照老师的方法优化了负债结构，现在每个月省下的利息够给孩子报两个兴趣班。"
    },
    {
      title: "征信修复",
      user: "王先生 (个体户)",
      before: "查询80+，大数据黑了",
      after: "征信恢复正常，成功批款",
      desc: "被中介忽悠乱点链接，导致征信花了贷不出来钱。在社群里学习了如何停止乱查询、如何覆盖数据，半年后成功申请到了正规银行备用金。"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">学员<span className="text-gold-500">真实反馈</span></h2>
          <p className="text-gray-400">结果不会陪你演戏，数据证明一切</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-slate-900 border border-white/5 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              <div className="mb-6">
                <span className="inline-block bg-gold-500/20 text-gold-400 text-xs font-bold px-3 py-1 rounded-full mb-2">{item.title}</span>
                <h4 className="text-white font-bold text-lg">{item.user}</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/10">
                  <div className="text-gray-500 text-xs mb-1">优化前</div>
                  <div className="text-red-300 font-medium">{item.before}</div>
                </div>
                <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/10">
                  <div className="text-gray-500 text-xs mb-1">优化后</div>
                  <div className="text-green-300 font-medium">{item.after}</div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;