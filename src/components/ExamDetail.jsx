import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/** 生成完整试卷 — 分页结构 */
function getFullPaper(exam) {
  const s = exam.subject;

  const papers = {
    语文: {
      info: '满分150分，考试时间150分钟。',
      pages: [
        {
          header: true,
          content: (
            <Box>
              <Typography sx={{ textAlign:'center',fontSize:'0.7rem',color:'#666',letterSpacing:3,mb:0.5 }}>绝密 ★ 启用前</Typography>
              <Typography sx={{ textAlign:'center',fontWeight:700,fontSize:{xs:'1rem',sm:'1.3rem'},mb:1,letterSpacing:2 }}>{exam.title}</Typography>
              <Divider sx={{my:1}}/>
              <Typography sx={{fontSize:'0.7rem',color:'#444'}}>命题：{exam.source}　|　日期：{exam.date}　|　地区：{exam.region}　|　难度：{exam.difficulty}</Typography>
              <Typography sx={{mt:1,fontSize:'0.75rem',color:'#555'}}>本试卷满分150分，考试时间150分钟。</Typography>
              <Typography sx={{mt:0.5,fontSize:'0.7rem',color:'#888',fontStyle:'italic'}}>{exam.description}</Typography>
              <Typography sx={{mt:2,textAlign:'center',fontSize:'0.65rem',color:'#aaa',letterSpacing:4}}>———————— 请在各题目的答题区域内作答 ————————</Typography>
            </Box>
          ),
        },
        {
          title: '一、现代文阅读（35分）',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:0.5,textAlign:'center'}}>一、现代文阅读（35分）</Typography>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>（一）现代文阅读Ⅰ（本题共5小题，19分）</Typography>
              <Typography sx={{fontSize:'0.75rem',lineHeight:2,mb:1}}>阅读下面的文字，完成1~5题。</Typography>
              <Box sx={{bgcolor:'#fefcf7',p:1.5,border:'1px solid #e8e0d0',borderRadius:1,mb:1.5}}>
                <Typography sx={{fontFamily:'"Noto Serif SC","SimSun",serif',fontSize:'0.73rem',lineHeight:2,mb:0.5}}>
                  <strong>材料一：</strong>
                </Typography>
                <Typography sx={{fontFamily:'"Noto Serif SC","SimSun",serif',fontSize:'0.72rem',lineHeight:2.2}}>
                  人工智能正在深刻地改变着人类社会。从最初的简单计算工具，到如今能进行复杂推理和创作的智能系统，AI的发展速度远超预期。2023年以来，以大语言模型为代表的生成式AI更是掀起了一场科技革命。然而，当我们在为AI欢呼的同时，也需要冷静思考：这些智能系统会取代人类的创造力吗？我们的教育体系是否准备好了迎接AI时代的挑战？
                </Typography>
              </Box>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2.2}}>
                1.（3分）下列对材料相关内容的理解和分析，<strong>不正确</strong>的一项是<br/>
                &emsp;Ａ. 人工智能技术已经能够进行复杂的推理和创作<br/>
                &emsp;Ｂ. 大语言模型是2023年以来AI领域的重大突破<br/>
                &emsp;Ｃ. AI的发展速度完全符合人们的预期<br/>
                &emsp;Ｄ. AI时代的到来对教育体系提出了新的挑战<br/><br/>
                2.（3分）根据材料一，下列关于AI与创造力的说法正确的是<br/>
                &emsp;Ａ. AI已经完全取代了人类的创造力<br/>
                &emsp;Ｂ. 人类需要思考AI与创造力的关系<br/>
                &emsp;Ｃ. AI在创造力方面完全不如人类<br/>
                &emsp;Ｄ. 创造力是AI无法触及的领域<br/>
              </Typography>
              <Divider sx={{my:1,borderStyle:'dashed'}}/>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>（二）现代文阅读Ⅱ（本题共4小题，16分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2}}>
                阅读下面的文字，完成6~9题。<br/><br/>
                6.（3分）下列对文本相关内容和艺术特色的分析鉴赏，正确的一项是<br/>
                &emsp;Ａ. 文章以第一人称叙述，增强了故事的真实性<br/>
                &emsp;Ｂ. 作者大量使用比喻修辞，但效果适得其反<br/>
                &emsp;Ｃ. 文章结构松散，缺乏明确的叙事线索<br/>
                &emsp;Ｄ. 人物形象单薄，缺乏个性特征<br/><br/>
                7.（3分）文中画线句子的含意是<br/>
                &emsp;Ａ. 表达了对田园生活的向往<br/>
                &emsp;Ｂ. 暗示了人物的内心矛盾<br/>
                &emsp;Ｃ. 描写了自然的壮丽景色<br/>
                &emsp;Ｄ. 抒发了对时光流逝的感慨<br/>
              </Typography>
            </Box>
          ),
        },
        {
          title: '二、古代诗文阅读（35分）',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:0.5,textAlign:'center'}}>二、古代诗文阅读（35分）</Typography>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>（一）文言文阅读（本题共5小题，20分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2,mb:1}}>阅读下面的文言文，完成10~14题。</Typography>
              <Box sx={{bgcolor:'#fefcf7',p:1.5,border:'1px solid #e8e0d0',borderRadius:1,mb:1.5}}>
                <Typography sx={{fontFamily:'"Noto Serif SC","SimSun",serif',fontSize:'0.72rem',lineHeight:2.2}}>
                  苏轼，字子瞻，眉州眉山人。生十年，父洵游学四方，母程氏亲授以书，闻古今成败，辄能语其要。比冠，博通经史，属文日数千言，好贾谊、陆贽书。既而读《庄子》，叹曰："吾昔有见，口未能言，今见是书，得吾心矣。"<br/>
                  嘉祐二年，试礼部。方时文磔裂诡异之弊胜，主司欧阳修思有以救之，得轼《刑赏忠厚论》，惊喜，欲擢冠多士，犹疑其客曾巩所为，但置第二。复以《春秋》对义居第一，殿试中乙科。后以书见修，修语梅圣俞曰："吾当避此人出一头地。"闻者始哗不厌，久乃信服。
                </Typography>
              </Box>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2.2}}>
                10.（3分）下列对文中画波浪线部分的断句，正确的一项是<br/>
                &emsp;Ａ. 比冠博通/经史属文/日数千言<br/>
                &emsp;Ｂ. 比冠/博通经史/属文日数千言<br/>
                &emsp;Ｃ. 比冠博通/经史/属文/日数千言<br/>
                &emsp;Ｄ. 比冠/博通经史属文/日数千言<br/><br/>
                11.（3分）下列对文中加点词语的相关内容的解说，<strong>不正确</strong>的一项是<br/>
                &emsp;Ａ. "比冠"指即将行冠礼，古代男子二十岁行冠礼<br/>
                &emsp;Ｂ. "礼部"为六部之一，掌管礼仪、祭祀、科举等事务<br/>
                &emsp;Ｃ. "殿试"是由皇帝亲自主持的最高级别科举考试<br/>
                &emsp;Ｄ. "乙科"是科举考试中最低的等级<br/>
              </Typography>
              <Divider sx={{my:1,borderStyle:'dashed'}}/>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>（二）古代诗歌阅读（本题共2小题，9分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2}}>
                阅读下面这首宋词，完成14~15题。<br/><br/>
                14.（3分）下列对这首词的理解和赏析，不恰当的一项是<br/>
                &emsp;Ａ. 上片写景，描绘了一幅宁静优美的画面<br/>
                &emsp;Ｂ. 下片抒情，表达了对往昔岁月的怀念<br/>
                &emsp;Ｃ. 全词语言清新自然，意境深远悠长<br/>
                &emsp;Ｄ. 词人运用典故，增强了作品的表现力<br/><br/>
                15.（6分）请简要分析这首词的表达技巧和思想感情。<br/>
              </Typography>
            </Box>
          ),
        },
        {
          title: '三、语言文字运用（20分） + 四、写作（60分）',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:0.5,textAlign:'center'}}>三、语言文字运用（20分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2.2,mb:1}}>
                阅读下面的文字，完成18~22题。<br/><br/>
                18.（3分）下列各句中，没有语病的一句是<br/>
                &emsp;Ａ. 通过这次学习，使我深刻认识到知识的重要性<br/>
                &emsp;Ｂ. 他的写作水平有了明显的改善<br/>
                &emsp;Ｃ. 我们一定要发扬和继承中华民族的优秀传统<br/>
                &emsp;Ｄ. 经过努力，他终于取得了令人瞩目的成绩<br/><br/>
                19.（4分）在下面一段文字横线处补写恰当的语句，使整段文字语意完整连贯。<br/><br/>
                20.（4分）请对下面这段新闻报道的文字进行压缩。要求保留关键信息，句子简洁流畅，不超过60个字。<br/><br/>
                21.（5分）仿照下面的示例，另写两句话。要求句式与示例相同。<br/><br/>
                22.（4分）下面文段有三处推断存在问题，请参照示例，说明另外两处问题。
              </Typography>
              <Divider sx={{my:1.5}}/>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>四、写作（60分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2.2}}>
                23.（60分）阅读下面的材料，根据要求写作。<br/><br/>
                有人说，这个时代变化太快，来不及思考就已经被裹挟着前进；也有人说，正因时代变化太快，才更需要停下来想一想，什么是不变的。<br/><br/>
                对此，你有怎样的感悟与思考？请写一篇文章。<br/><br/>
                要求：选准角度，确定立意，明确文体，自拟标题；不要套作，不得抄袭；不少于800字。
              </Typography>
            </Box>
          ),
        },
      ],
    },
    数学: {
      info: '满分150分，考试时间120分钟。',
      pages: [
        {
          header: true,
          content: (
            <Box>
              <Typography sx={{ textAlign:'center',fontSize:'0.7rem',color:'#666',letterSpacing:3,mb:0.5 }}>绝密 ★ 启用前</Typography>
              <Typography sx={{ textAlign:'center',fontWeight:700,fontSize:{xs:'1rem',sm:'1.3rem'},mb:1,letterSpacing:2 }}>{exam.title}</Typography>
              <Divider sx={{my:1}}/>
              <Typography sx={{fontSize:'0.7rem',color:'#444'}}>命题：{exam.source}　|　日期：{exam.date}　|　满分：150分　|　时间：120分钟</Typography>
              <Typography sx={{mt:0.5,fontSize:'0.7rem',color:'#888',fontStyle:'italic'}}>{exam.description}</Typography>
              <Typography sx={{mt:2,fontSize:'0.7rem',color:'#666'}}>注意事项：1.答卷前，考生务必将自己的姓名、准考证号填写在答题卡上。2.回答选择题时，选出答案后，用铅笔把答题卡上对应题目的答案标号涂黑。3.考试结束后，将本试卷和答题卡一并交回。</Typography>
              <Typography sx={{mt:2,textAlign:'center',fontSize:'0.65rem',color:'#aaa',letterSpacing:4}}>———————— 请在各题目的答题区域内作答 ————————</Typography>
            </Box>
          ),
        },
        {
          title: '一、单项选择题（40分）',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:0.5,textAlign:'center'}}>第Ⅰ卷（选择题 共60分）</Typography>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>一、单项选择题：本题共8小题，每小题5分，共40分。</Typography>
              <Typography sx={{fontFamily:'"Noto Serif SC",serif',fontSize:'0.73rem',lineHeight:2.2}}>
                1. 若集合 A = {'{'}x | x² − 3x + 2 ≤ 0{'}'}，B = {'{'}x | 0 {'<'} x {'<'} 4{'}'}，则 A ∩ B =<br/>
                &emsp;Ａ. (1, 2)&emsp;&emsp;&emsp;Ｂ. [1, 2]&emsp;&emsp;&emsp;Ｃ. (0, 4)&emsp;&emsp;&emsp;Ｄ. [0, 4]<br/><br/>
                2. 已知复数 z 满足 z(1 + i) = 2 − i，则 |z| =<br/>
                &emsp;Ａ. √5/2&emsp;&emsp;&emsp;Ｂ. √10/2&emsp;&emsp;&emsp;Ｃ. √5&emsp;&emsp;&emsp;&emsp;Ｄ. √10<br/><br/>
                3. 已知向量 a = (1, √3)，b = (3, m)，若 a ⊥ b，则 m =<br/>
                &emsp;Ａ. −√3&emsp;&emsp;&emsp;Ｂ. −√3/3&emsp;&emsp;&emsp;Ｃ. √3/3&emsp;&emsp;&emsp;Ｄ. √3<br/><br/>
                4. 函数 f(x) = ln(x² − 3x + 3) 的单调递增区间是<br/>
                &emsp;Ａ. (1, +∞)&emsp;&emsp;Ｂ. (−∞, 1)&emsp;&emsp;Ｃ. (3/2, +∞)&emsp;Ｄ. (1, 3/2)<br/><br/>
                5. 已知等差数列 {'{aₙ}'} 的前 n 项和为 Sₙ，若 a₁ = 2，S₃ = 15，则 a₅ =<br/>
                &emsp;Ａ. 8&emsp;&emsp;&emsp;&emsp;Ｂ. 10&emsp;&emsp;&emsp;&emsp;Ｃ. 12&emsp;&emsp;&emsp;&emsp;Ｄ. 14<br/><br/>
                6. 双曲线 x²/a² − y²/b² = 1 的离心率为 √3，则渐近线方程为<br/>
                &emsp;Ａ. y = ±√2x&emsp;&emsp;Ｂ. y = ±2x&emsp;&emsp;Ｃ. y = ±x&emsp;&emsp;Ｄ. y = ±(√2/2)x<br/><br/>
                7. 已知 sin(α + π/6) = 1/3，则 cos(2α + π/3) =<br/>
                &emsp;Ａ. 7/9&emsp;&emsp;&emsp;Ｂ. −7/9&emsp;&emsp;&emsp;Ｃ. 1/3&emsp;&emsp;&emsp;Ｄ. −1/3<br/><br/>
                8. 函数 f(x) = x³ − 3x² − 9x + 5 在区间 [−2, 4] 上的最大值为<br/>
                &emsp;Ａ. 10&emsp;&emsp;&emsp;Ｂ. 13&emsp;&emsp;&emsp;Ｃ. 15&emsp;&emsp;&emsp;Ｄ. 17
              </Typography>
              <Divider sx={{my:1,borderStyle:'dashed'}}/>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>二、多项选择题：本题共4小题，每小题5分，共20分。（全部选对得5分，部分选对得2分，有选错得0分）</Typography>
              <Typography sx={{fontFamily:'"Noto Serif SC",serif',fontSize:'0.73rem',lineHeight:2.2}}>
                9. 已知函数 f(x) = sin(ωx + φ)，则下列结论正确的有<br/>
                &emsp;Ａ. 若 ω = 2，则 f(x) 的最小正周期为 π<br/>
                &emsp;Ｂ. 若 φ = π/3，则 f(π/12) = 1<br/>
                &emsp;Ｃ. f(x) 的最大值为 1<br/>
                &emsp;Ｄ. f(x) 是偶函数当且仅当 φ = π/2<br/><br/>
                10. 在正方体 ABCD-A₁B₁C₁D₁ 中，下列结论正确的有<br/>
                &emsp;Ａ. A₁C₁ ⊥ B₁D&emsp;&emsp;Ｂ. A₁C₁ ∥ 平面 AB₁D₁<br/>
                &emsp;Ｃ. 异面直线 A₁C₁ 与 AD 所成角为 45°<br/>
                &emsp;Ｄ. 三棱锥 A₁-B₁D₁C 的体积是正方体体积的 1/6
              </Typography>
            </Box>
          ),
        },
        {
          title: '三、填空题 + 四、解答题',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:0.5,textAlign:'center'}}>第Ⅱ卷（非选择题 共90分）</Typography>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>三、填空题：本题共4小题，每小题5分，共20分。</Typography>
              <Typography sx={{fontFamily:'"Noto Serif SC",serif',fontSize:'0.73rem',lineHeight:2.2}}>
                11. (x + 1/x)⁶ 的展开式中常数项为 __________<br/><br/>
                12. 在 △ABC 中，若 a = 3，b = 4，cosC = −1/4，则 c = __________<br/><br/>
                13. 已知随机变量 X ~ B(10, 0.3)，则 D(2X + 1) = __________<br/><br/>
                14. 过点 P(1, 2) 作圆 x² + y² = 5 的切线，切线方程为 __________
              </Typography>
              <Divider sx={{my:1.5}}/>
              <Typography sx={{fontWeight:600,fontSize:'0.78rem',mb:1}}>四、解答题：本题共6小题，共70分。</Typography>
              <Typography sx={{fontFamily:'"Noto Serif SC",serif',fontSize:'0.73rem',lineHeight:2.2}}>
                15.（10分）已知数列 {'{aₙ}'} 满足 a₁ = 1，aₙ₊₁ = 2aₙ + 3ⁿ。<br/>
                &emsp;（1）证明：数列 {'{aₙ − 3ⁿ}'} 是等比数列；<br/>
                &emsp;（2）求数列 {'{aₙ}'} 的通项公式。<br/><br/>
                16.（12分）如图，在四棱锥 P-ABCD 中，底面 ABCD 是边长为 2 的正方形，PA ⊥ 底面 ABCD，且 PA = 3。<br/>
                &emsp;（1）求直线 PC 与平面 PBD 所成角的正弦值；<br/>
                &emsp;（2）求二面角 A-PB-D 的余弦值。<br/><br/>
                17.（12分）已知函数 f(x) = eˣ − ax − 1（a ∈ R）。<br/>
                &emsp;（1）讨论 f(x) 的单调性；<br/>
                &emsp;（2）若 f(x) ≥ 0 恒成立，求 a 的取值范围。<br/><br/>
                18.（12分）已知椭圆 C：x²/4 + y²/3 = 1 的左、右焦点分别为 F₁, F₂，过 F₂ 的直线 l 与椭圆 C 交于 A, B 两点。<br/>
                &emsp;（1）若直线 l 的倾斜角为 45°，求 |AB|；<br/>
                &emsp;（2）求 △F₁AB 面积的最大值。<br/><br/>
                19.（12分）某市为了解市民对垃圾分类的了解程度，随机抽取了 200 名市民进行问卷调查……<br/>
                &emsp;（1）补全 2×2 列联表，并判断是否有 99% 的把握……<br/>
                &emsp;（2）若采用分层抽样的方法从了解程度为"非常了解"的市民中抽取……<br/><br/>
                20.（12分）已知函数 f(x) = x ln x。<br/>
                &emsp;（1）求 f(x) 的单调区间和极值；<br/>
                &emsp;（2）证明：当 x {'>'} 1 时，f(x) {'>'} (x − 1) / (x + 1)。
              </Typography>
            </Box>
          ),
        },
      ],
    },
    英语: {
      info: '满分150分，考试时间120分钟。',
      pages: [
        {
          header: true,
          content: (
            <Box>
              <Typography sx={{ textAlign:'center',fontSize:'0.7rem',color:'#666',letterSpacing:3,mb:0.5 }}>绝密 ★ 启用前</Typography>
              <Typography sx={{ textAlign:'center',fontWeight:700,fontSize:{xs:'1rem',sm:'1.3rem'},mb:1,letterSpacing:2 }}>{exam.title}</Typography>
              <Divider sx={{my:1}}/>
              <Typography sx={{fontSize:'0.7rem',color:'#444'}}>命题：{exam.source}　|　日期：{exam.date}　|　满分：150分　|　时间：120分钟</Typography>
              <Typography sx={{mt:0.5,fontSize:'0.7rem',color:'#888',fontStyle:'italic'}}>{exam.description}</Typography>
              <Typography sx={{mt:2,textAlign:'center',fontSize:'0.65rem',color:'#aaa',letterSpacing:4}}>———————— 请在各题目的答题区域内作答 ————————</Typography>
            </Box>
          ),
        },
        {
          title: 'Part 1 Listening + Part 2 Reading',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>第一部分　听力（共两节，满分30分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2,mb:1}}>第一节（共5小题；每小题1.5分，满分7.5分）</Typography>
              <Typography sx={{fontSize:'0.72rem',lineHeight:2.2,fontFamily:'"Noto Serif SC",serif'}}>
                1. What does the man want to do?<br/>
                &emsp;Ａ. Buy a ticket.&emsp;Ｂ. Book a table.&emsp;Ｃ. Reserve a room.<br/><br/>
                2. How will the woman go to the airport?<br/>
                &emsp;Ａ. By taxi.&emsp;&emsp;Ｂ. By bus.&emsp;&emsp;Ｃ. By subway.<br/><br/>
                3. What are the speakers mainly talking about?<br/>
                &emsp;Ａ. A new movie.&emsp;Ｂ. A weekend plan.&emsp;Ｃ. A school project.<br/><br/>
                4. Where does the conversation probably take place?<br/>
                &emsp;Ａ. In a library.&emsp;Ｂ. In a bookstore.&emsp;Ｃ. In a classroom.<br/><br/>
                5. What is the probable relationship between the speakers?<br/>
                &emsp;Ａ. Teacher and student.&emsp;Ｂ. Doctor and patient.&emsp;Ｃ. Boss and employee.
              </Typography>
              <Divider sx={{my:1,borderStyle:'dashed'}}/>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>第二部分　阅读理解（共两节，满分50分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2,mb:1}}>第一节（共15小题；每小题2.5分，满分37.5分）</Typography>
              <Typography sx={{fontSize:'0.72rem',lineHeight:2.2,fontFamily:'serif'}}>
                <strong>A</strong><br/>
                &emsp;The Great Wall of China is one of the most remarkable architectural achievements in human history. Stretching over 13,000 miles across northern China, it stands as a testament to the ingenuity and determination of the Chinese people...<br/><br/>
                21. What is the main purpose of the passage?<br/>
                &emsp;Ａ. To describe a historical site.&emsp;Ｂ. To advertise a travel package.<br/>
                &emsp;Ｃ. To explain an engineering feat.&emsp;Ｄ. To compare different walls.<br/><br/>
                22. The Great Wall was originally built to<br/>
                &emsp;Ａ. attract tourists.&emsp;Ｂ. defend against invasions.<br/>
                &emsp;Ｃ. facilitate trade.&emsp;Ｄ. demonstrate power.<br/><br/>
                <strong>B</strong><br/>
                &emsp;When Sarah first started her job at the wildlife rescue center, she had no idea how much it would change her life...<br/><br/>
                23. What surprised Sarah most about her job?<br/>
                &emsp;Ａ. The long working hours.&emsp;Ｂ. The variety of animals.<br/>
                &emsp;Ｃ. The emotional impact.&emsp;Ｄ. The physical demands.
              </Typography>
            </Box>
          ),
        },
        {
          title: 'Part 3 Language Use + Part 4 Writing',
          content: (
            <Box>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>第三部分　语言运用（共两节，满分30分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2,mb:1}}>第一节 完形填空（共15小题；每小题1分，满分15分）</Typography>
              <Typography sx={{fontSize:'0.72rem',lineHeight:2.2,fontFamily:'serif',mb:1}}>
                Last summer, I volunteered at a wildlife rescue center. The experience was both ___ and rewarding. Every day, I would wake up at 6 a.m. to help feed the animals. The first few days were incredibly ___ as I had to learn how to handle different species...<br/><br/>
                31. Ａ. challenging&emsp;Ｂ. boring&emsp;Ｃ. relaxing&emsp;Ｄ. frightening<br/>
                32. Ａ. exciting&emsp;&emsp;Ｂ. difficult&emsp;Ｃ. pleasant&emsp;Ｄ. simple
              </Typography>
              <Divider sx={{my:1}}/>
              <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>第四部分　写作（共两节，满分40分）</Typography>
              <Typography sx={{fontSize:'0.73rem',lineHeight:2.2}}>
                <strong>第一节 应用文写作（满分15分）</strong><br/>
                假定你是李华，你的英国朋友Chris来信询问你校最近举办的"科技创新节"活动。请给他回信，内容包括：<br/>
                1. 活动时间和地点；<br/>
                2. 活动的具体内容；<br/>
                3. 你的感受。<br/>
                注意：1. 词数80左右；2. 可适当增加细节，以使行文连贯。<br/><br/>
                <strong>第二节 读后续写（满分25分）</strong><br/>
                阅读下面材料，根据其内容和所给段落开头语续写两段，使之构成一篇完整的短文。<br/><br/>
                It was a cold winter morning when Sarah found the old photograph in her grandmother's attic. The black-and-white image showed a young woman standing beside a fountain, a gentle smile on her face. Sarah had never seen this woman before, but something about her seemed strangely familiar...
              </Typography>
            </Box>
          ),
        },
      ],
    },
  };

  // 通用试卷（理化生史地政）
  const genericPaper = {
    info: `满分100分，考试时间75分钟。`,
    pages: [
      {
        header: true,
        content: (
          <Box>
            <Typography sx={{ textAlign:'center',fontSize:'0.7rem',color:'#666',letterSpacing:3,mb:0.5 }}>绝密 ★ 启用前</Typography>
            <Typography sx={{ textAlign:'center',fontWeight:700,fontSize:{xs:'1rem',sm:'1.3rem'},mb:1,letterSpacing:2 }}>{exam.title}</Typography>
            <Divider sx={{my:1}}/>
            <Typography sx={{fontSize:'0.7rem',color:'#444'}}>命题：{exam.source}　|　日期：{exam.date}　|　地区：{exam.region}　|　难度：{exam.difficulty}</Typography>
            <Typography sx={{mt:0.5,fontSize:'0.7rem',color:'#888',fontStyle:'italic'}}>{exam.description}</Typography>
            <Typography sx={{mt:2,textAlign:'center',fontSize:'0.65rem',color:'#aaa',letterSpacing:4}}>———————— 请在各题目的答题区域内作答 ————————</Typography>
          </Box>
        ),
      },
      {
        title: '选择题部分',
        content: (
          <Box>
            <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>一、选择题（本题共12小题，每小题4分，共48分）</Typography>
            <Typography sx={{fontFamily:'"Noto Serif SC",serif',fontSize:'0.73rem',lineHeight:2.2}}>
              1. 下列选项中，符合题目要求的是<br/>
              &emsp;Ａ. 选项A&emsp;&emsp;Ｂ. 选项B&emsp;&emsp;Ｃ. 选项C&emsp;&emsp;Ｄ. 选项D<br/><br/>
              2. 根据所学知识，下列说法正确的是<br/>
              &emsp;Ａ. 选项A&emsp;&emsp;Ｂ. 选项B&emsp;&emsp;Ｃ. 选项C&emsp;&emsp;Ｄ. 选项D<br/><br/>
              3. 下列关于{s}学科的表述，<strong>不正确</strong>的是<br/>
              &emsp;Ａ. 选项A&emsp;&emsp;Ｂ. 选项B&emsp;&emsp;Ｃ. 选项C&emsp;&emsp;Ｄ. 选项D<br/><br/>
              4. 材料中体现的核心原理是<br/>
              &emsp;Ａ. 选项A&emsp;&emsp;Ｂ. 选项B&emsp;&emsp;Ｃ. 选项C&emsp;&emsp;Ｄ. 选项D<br/><br/>
              5. 结合所学知识，以下推断合理的是<br/>
              &emsp;Ａ. 选项A&emsp;&emsp;Ｂ. 选项B&emsp;&emsp;Ｃ. 选项C&emsp;&emsp;Ｄ. 选项D<br/><br/>
              6. 从{s}学科角度分析，该现象说明了<br/>
              &emsp;Ａ. 选项A&emsp;&emsp;Ｂ. 选项B&emsp;&emsp;Ｃ. 选项C&emsp;&emsp;Ｄ. 选项D
            </Typography>
          </Box>
        ).props.children.props.children.replace(/\{s\}/g, s),
        raw: true,
      },
      {
        title: '非选择题部分',
        content: (
          <Box>
            <Typography sx={{fontWeight:700,fontSize:'0.85rem',mb:1,textAlign:'center'}}>二、非选择题（共52分）</Typography>
            <Typography sx={{fontFamily:'"Noto Serif SC",serif',fontSize:'0.73rem',lineHeight:2.2}}>
              13.（12分）阅读材料，回答问题。<br/>
              &emsp;（1）结合材料，运用所学知识分析该现象产生的原因。<br/>
              &emsp;（2）针对上述问题，提出你的解决方案。<br/><br/>
              14.（14分）阅读材料，完成下列要求。<br/>
              &emsp;（1）概括材料所反映的核心观点。<br/>
              &emsp;（2）运用相关知识，对材料中的观点进行评析。<br/><br/>
              15.（12分）论述题。<br/>
              &emsp;请结合所学知识，围绕以上主题展开论述。要求：观点明确，逻辑清晰，论据充分。<br/><br/>
              16.（14分）综合探究题。<br/>
              &emsp;（1）根据材料，描述其中呈现的变化趋势。<br/>
              &emsp;（2）分析变化产生的主要原因。<br/>
              &emsp;（3）从多角度提出应对建议。
            </Typography>
          </Box>
        ),
      },
    ],
  };

  return papers[s] || genericPaper;
}

export default function ExamDetail({ exam, open, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!exam) return null;

  const paper = getFullPaper(exam);
  const totalPages = paper.pages.length;

  return (
    <Dialog
      open={open}
      onClose={() => { onClose(); setCurrentPage(0); }}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1,
          overflow: 'hidden',
          bgcolor: '#fdfaf3',
          minHeight: { xs: '70vh', sm: '80vh' },
        },
      }}
    >
      {/* 页面导航栏 */}
      <Box
        sx={{
          bgcolor: '#1a1a2e',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
        }}
      >
        <IconButton onClick={() => { onClose(); setCurrentPage(0); }} sx={{ color: '#fff' }} size="small">
          <CloseIcon />
        </IconButton>
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, textAlign: 'center', flex: 1 }}>
          {exam.title}
        </Typography>
        <Typography sx={{ fontSize: '0.7rem', opacity: 0.7, minWidth: 48, textAlign: 'right' }}>
          {currentPage + 1}/{totalPages}
        </Typography>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {/* 试卷纸面 */}
        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            minHeight: { xs: '55vh', sm: '65vh' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* 页面内容 + 翻页动画 */}
          <Box
            key={currentPage}
            sx={{
              flex: 1,
              animation: 'pageFlip 0.35s ease-out',
              '@keyframes pageFlip': {
                '0%': { opacity: 0, transform: 'rotateY(-8deg) translateX(20px)' },
                '100%': { opacity: 1, transform: 'rotateY(0) translateX(0)' },
              },
            }}
          >
            {/* 密封线（非首页） */}
            {!paper.pages[currentPage].header && (
              <Box
                sx={{
                  float: 'left',
                  width: 28,
                  mr: 2,
                  mb: 1,
                  bgcolor: '#1a1a2e',
                  color: '#fff',
                  borderRadius: '2px 0 0 2px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 1,
                }}
              >
                <Typography sx={{ fontSize: '0.55rem', writingMode: 'vertical-rl', letterSpacing: 1 }}>密封线内不要答题</Typography>
              </Box>
            )}
            {paper.pages[currentPage].content}
          </Box>

          {/* 底部翻页按钮 */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
              pt: 2,
              borderTop: '1px solid #e8e0d0',
            }}
          >
            <IconButton
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              size="small"
              sx={{ color: currentPage === 0 ? '#ccc' : '#1a1a2e' }}
            >
              <NavigateBeforeIcon />
            </IconButton>

            <Typography sx={{ fontSize: '0.65rem', color: '#aaa' }}>
              ———— {currentPage + 1} / {totalPages} ————
            </Typography>

            <IconButton
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              size="small"
              sx={{ color: currentPage === totalPages - 1 ? '#ccc' : '#1a1a2e' }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
