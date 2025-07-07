// ===============================================
// 初デートモード専用JavaScript
// HeartConnect - First Date Mode
// ===============================================

class FirstDateModerator {
    constructor() {
        this.currentPhase = 1;
        this.timer = null;
        this.timeRemaining = 180; // 3分
        this.selectedReactions = [];
        this.phaseQuestions = {
            1: [
                {
                    question: "なんで今日、ここに来ようと思いましたか？",
                    hints: ["💭 素直な気持ちで", "💝 相手の目を見て", "🌟 ゆっくり話して"],
                    moderatorIntro: "お二人の初デートへようこそ！まずは、今の素直な気持ちから始めましょう。"
                },
                {
                    question: "会う前、どんな気持ちでしたか？正直に教えてください。",
                    hints: ["😊 緊張してた？", "💭 楽しみだった？", "🤔 不安もあった？"],
                    moderatorIntro: "素敵な答えでしたね。次は会う前の気持ちを聞かせてください。"
                },
                {
                    question: "今、目の前にいる相手を見て、最初にどう感じましたか？",
                    hints: ["👀 第一印象は", "💝 素直に感じたこと", "✨ 驚いたこと"],
                    moderatorIntro: "お互いの気持ちが伝わってきますね。"
                },
                {
                    question: "今、一番緊張していることは？",
                    hints: ["😅 言葉が出ない", "💓 手が震える", "😊 失敗が怖い"],
                    moderatorIntro: "緊張も大切な感情です。共有してみましょう。"
                },
                {
                    question: "相手の第一印象で一番印象的だったことは？",
                    hints: ["🎵 声のトーン", "😊 笑顔", "✨ 全体の雰囲気"],
                    moderatorIntro: "第一印象って大切ですよね。"
                },
                {
                    question: "今日、一番楽しみにしていたことは？",
                    hints: ["💭 たくさん話すこと", "⏰ 一緒の時間", "🌟 新しい発見"],
                    moderatorIntro: "期待していたことを教えてください。"
                }
            ],
            2: [
                {
                    question: "初対面で一番不安なことは何ですか？",
                    hints: ["😅 沈黙が怖い", "💭 つまらないと思われたくない", "🎭 素の自分を出せるか"],
                    moderatorIntro: "少し深い話をしてみましょう。不安も共有することで、もっと近づけます。"
                },
                {
                    question: "今日、相手に一番知ってほしいことは？",
                    hints: ["💝 あなたの魅力", "🌟 大切にしていること", "💭 隠れた一面"],
                    moderatorIntro: "素直な気持ちをありがとう。もっとお互いを知りましょう。"
                },
                {
                    question: "なぜ私に会ってみようと思ったの？本音を教えて。",
                    hints: ["💌 最初の印象", "✨ 惹かれた理由", "🌸 期待していたこと"],
                    moderatorIntro: "ここまで話せているのは素晴らしいことです。"
                },
                {
                    question: "恋愛で一番大切にしていることは？",
                    hints: ["🤝 信頼関係", "😊 笑顔でいること", "🌱 一緒に成長"],
                    moderatorIntro: "価値観を共有することで、より深く理解し合えます。"
                },
                {
                    question: "過去の恋愛で学んだ一番大切なことは？",
                    hints: ["💬 コミュニケーション", "🌟 自分らしさ", "⏰ タイミング"],
                    moderatorIntro: "経験から学んだことを教えてください。"
                },
                {
                    question: "相手にどんな自分を見てほしい？",
                    hints: ["🎭 素の自分", "💪 頑張る姿", "💝 優しい面"],
                    moderatorIntro: "理想の自分について話してみましょう。"
                }
            ],
            3: [
                {
                    question: "相手のどんな瞬間にほっとしましたか？",
                    hints: ["😊 笑顔を見た時", "💝 優しさを感じた時", "🌟 共通点を見つけた時"],
                    moderatorIntro: "最後のフェーズです。今日の素敵な瞬間を振り返ってみましょう。"
                },
                {
                    question: "もし今日がうまくいったら、次は何をしたい？",
                    hints: ["🎭 一緒に行きたい場所", "🍽️ 食べたいもの", "💝 やってみたいこと"],
                    moderatorIntro: "未来の話をすることで、二人の関係がより具体的になりますね。"
                },
                {
                    question: "今日話してみて、相手の印象は変わった？どんな風に？",
                    hints: ["✨ 新しい発見", "💝 もっと好きになった", "🌟 意外な一面"],
                    moderatorIntro: "今日の締めくくりに、お互いの印象を共有しましょう。"
                },
                {
                    question: "一緒にやってみたい初めてのことは？",
                    hints: ["🍳 料理を作る", "🎒 どこかへ旅行", "🏃 スポーツ体験"],
                    moderatorIntro: "新しいチャレンジについて考えてみましょう。"
                },
                {
                    question: "相手といる時の理想の距離感は？",
                    hints: ["👥 いつも一緒", "🌸 程よい距離", "🦋 自由な関係"],
                    moderatorIntro: "お互いの心地よい距離感を確認しましょう。"
                },
                {
                    question: "今日の出会いをひとことで表すなら？",
                    hints: ["✨ 運命", "🌟 チャンス", "🌱 始まり"],
                    moderatorIntro: "今日という特別な日を言葉にしてみてください。"
                }
            ]
        };
        
        this.currentQuestionIndex = 0;
        this.reactionCounts = {}; // リアクションのカウント
        this.weatherHistory = []; // 天気の履歴
        this.onomatopoeiaOptions = [
            // 恋愛ポジティブ（相手が嬉しくなる）
            { text: "きゅん💗", type: "positive" },
            { text: "どきどき💓", type: "positive" },
            { text: "すてき✨", type: "positive" },
            
            // 共感・理解（相手を受け入れる）
            { text: "わかる〜💭", type: "neutral" },
            { text: "なるほど😊", type: "neutral" },
            { text: "そうなんだ💡", type: "neutral" },
            
            // 興味・関心（もっと知りたい）
            { text: "へぇ〜😮", type: "curious" },
            { text: "おもしろい🤔", type: "curious" },
            
            // 驚き（ポジティブな意外性）
            { text: "えっ😳", type: "surprise" }
        ];
    }
    
    init() {
        this.generateOnomatopoeiaButtons();
        this.startPhase(1);
        this.bindGlobalTouchEffects();
    }
    
    startPhase(phase) {
        this.currentPhase = phase;
        this.currentQuestionIndex = 0;
        this.updatePhaseIndicator();
        this.showNextQuestion();
        this.startTimer();
        
        // 司会者のアナウンス
        const intro = this.phaseQuestions[phase][0].moderatorIntro;
        this.showModeratorMessage(intro);
        
        // フェーズ開始エフェクト
        this.createPhaseStartEffect();
    }
    
    showNextQuestion() {
        const questions = this.phaseQuestions[this.currentPhase];
        if (this.currentQuestionIndex < questions.length) {
            const currentQ = questions[this.currentQuestionIndex];
            
            // 質問を更新
            document.getElementById('firstDateQuestion').textContent = currentQ.question;
            
            // ヒントを更新
            const hintsContainer = document.querySelector('.emotion-hints');
            hintsContainer.innerHTML = '';
            currentQ.hints.forEach(hint => {
                const hintDiv = document.createElement('div');
                hintDiv.className = 'emotion-hint';
                hintDiv.textContent = hint;
                hintsContainer.appendChild(hintDiv);
            });
            
            // 天気選択をリセット
            document.querySelectorAll('.weather-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // アニメーション
            const card = document.querySelector('.firstdate-question-card');
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'slideIn 0.5s ease-out';
            }, 10);
            
            this.currentQuestionIndex++;
        } else {
            // フェーズ終了
            this.endPhase();
        }
    }
    
    startTimer() {
        this.timeRemaining = 180; // 3分リセット
        this.stopTimer(); // 既存のタイマーをクリア
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endPhase();
            }
            
            // 残り30秒で警告
            if (this.timeRemaining === 30) {
                this.showModeratorMessage("残り30秒です。最後の質問に移りましょう。");
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
        
        // 残り時間が少なくなったら色を変える
        const timerElement = document.getElementById('timerDisplay');
        if (this.timeRemaining <= 30) {
            timerElement.style.color = '#FF6B6B';
        } else if (this.timeRemaining <= 60) {
            timerElement.style.color = '#FFB347';
        } else {
            timerElement.style.color = '#FF69B4';
        }
    }
    
    updatePhaseIndicator() {
        const dots = document.querySelectorAll('.phase-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            if (index < this.currentPhase - 1) {
                dot.classList.add('completed');
            } else if (index === this.currentPhase - 1) {
                dot.classList.add('active');
            }
        });
    }
    
    showModeratorMessage(message) {
        const messageElement = document.getElementById('moderatorMessage');
        messageElement.style.opacity = '0';
        
        setTimeout(() => {
            messageElement.textContent = message;
            messageElement.style.opacity = '1';
        }, 300);
        
        // パネル全体をアニメーション
        const panel = document.getElementById('moderatorPanel');
        panel.style.animation = 'none';
        setTimeout(() => {
            panel.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
    
    generateOnomatopoeiaButtons() {
        const container = document.getElementById('onomatopoeiaContainer');
        container.innerHTML = '';
        
        // リセットボタンを追加
        const resetBtn = document.createElement('button');
        resetBtn.className = 'reset-reactions-btn';
        resetBtn.textContent = '🔄 リアクションをリセット';
        resetBtn.onclick = () => this.resetReactions();
        container.appendChild(resetBtn);
        
        // オノマトペボタンを生成
        this.onomatopoeiaOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'onomatopoeia-btn';
            btn.id = `btn-${option.text}`;
            
            // テキスト部分
            const textSpan = document.createElement('span');
            textSpan.textContent = option.text;
            btn.appendChild(textSpan);
            
            // カウント部分
            const countSpan = document.createElement('span');
            countSpan.className = 'reaction-count';
            countSpan.textContent = '0';
            btn.appendChild(countSpan);
            
            btn.dataset.type = option.type;
            btn.onclick = () => this.selectOnomatopoeia(option.text, option.type);
            container.appendChild(btn);
        });
    }
    
    selectOnomatopoeia(text, type) {
        // ビッグオノマトペ表示
        this.showBigOnomatopoeia(text);
        
        // カウントを更新
        this.updateReactionCount(text);
        
        // ハートエフェクト
        this.createOnomatopoeiaHearts(type);
        
        // バイブレーション
        if (navigator.vibrate) {
            navigator.vibrate([30, 10, 30]);
        }
        
        // ボタンの選択状態
        const btn = document.getElementById(`btn-${text}`);
        if (btn) {
            btn.classList.add('selected');
            setTimeout(() => {
                btn.classList.remove('selected');
            }, 500);
        }
        
        // 選択履歴を保存
        this.selectedReactions.push(text);
    }
    
    updateReactionCount(text) {
        // カウントを増やす
        if (!this.reactionCounts[text]) {
            this.reactionCounts[text] = 0;
        }
        this.reactionCounts[text]++;
        
        // UIを更新
        const btn = document.getElementById(`btn-${text}`);
        if (btn) {
            const countSpan = btn.querySelector('.reaction-count');
            if (countSpan) {
                countSpan.textContent = this.reactionCounts[text];
                countSpan.classList.add('active');
            }
        }
    }
    
    resetReactions() {
        // カウントをリセット
        this.reactionCounts = {};
        this.selectedReactions = [];
        
        // UIをリセット
        document.querySelectorAll('.reaction-count').forEach(count => {
            count.textContent = '0';
            count.classList.remove('active');
        });
        
        // フィードバック
        this.showModeratorMessage("リアクションがリセットされました！新たな気持ちで続けましょう。");
    }
    
    showBigOnomatopoeia(text) {
        const bigText = document.createElement('div');
        bigText.className = 'big-onomatopoeia';
        bigText.textContent = text.replace(/[😊💗💓✨🤔💭😮🧐😳😲😱😅🤨💕😳💡😌]/g, '');
        document.body.appendChild(bigText);
        
        setTimeout(() => {
            if (bigText.parentNode) {
                bigText.parentNode.removeChild(bigText);
            }
        }, 1000);
    }
    
    
    createOnomatopoeiaHearts(type) {
        const colors = {
            positive: ['#FF69B4', '#FF1493', '#FFB6C1'],
            neutral: ['#87CEEB', '#4682B4', '#ADD8E6'],
            curious: ['#9370DB', '#8A2BE2', '#BA55D3'],
            surprise: ['#FFD700', '#FFA500', '#FFEB3B']
        };
        
        const selectedColors = colors[type] || colors.positive;
        
        // 画面中央から放射状にハートを生成
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💝';
            heart.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                font-size: 30px;
                color: ${selectedColors[Math.floor(Math.random() * selectedColors.length)]};
                pointer-events: none;
                z-index: 10000;
                animation: heartFloat 2s ease-out forwards;
                --tx: ${(Math.random() - 0.5) * 200}px;
                --ty: ${(Math.random() - 0.5) * 200 - 100}px;
            `;
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }
    }
    
    endPhase() {
        this.stopTimer();
        
        if (this.currentPhase < 3) {
            // 次のフェーズへの確認
            this.showModeratorMessage(`フェーズ${this.currentPhase}お疲れ様でした！次のフェーズに進みますか？`);
            document.getElementById('firstDateNextBtn').textContent = '次のフェーズへ →';
            document.getElementById('firstDateNextBtn').onclick = () => {
                this.startPhase(this.currentPhase + 1);
            };
        } else {
            // 全フェーズ終了
            this.showCompletionMessage();
        }
    }
    
    showCompletionMessage() {
        this.showModeratorMessage("素敵な初デートでしたね！お二人の距離がぐっと縮まったはずです。💝");
        
        // 結果サマリーを表示
        const summary = `
            <div style="text-align: center; margin-top: 20px;">
                <h3>今日のハイライト</h3>
                <p>共有したリアクション: ${this.selectedReactions.length}個</p>
                <p>最も多かった感情: ${this.getMostFrequentEmotion()}</p>
                <p>デート成功度: ⭐⭐⭐⭐⭐</p>
            </div>
        `;
        
        const card = document.querySelector('.firstdate-question-card');
        card.innerHTML = summary;
        
        document.getElementById('firstDateNextBtn').textContent = 'ホームに戻る';
        document.getElementById('firstDateNextBtn').onclick = () => {
            window.backToStart();
        };
    }
    
    getMostFrequentEmotion() {
        const emotions = {
            'きゅん': 0, 'どきどき': 0, 'わくわく': 0,
            'ふむふむ': 0, 'なるほど': 0, 'へぇ': 0
        };
        
        this.selectedReactions.forEach(reaction => {
            Object.keys(emotions).forEach(key => {
                if (reaction.includes(key)) {
                    emotions[key]++;
                }
            });
        });
        
        const maxEmotion = Object.entries(emotions)
            .sort((a, b) => b[1] - a[1])[0];
        
        return maxEmotion[0] + (maxEmotion[1] > 3 ? ' (たくさん！)' : '');
    }
    
    createPhaseStartEffect() {
        // フェーズ開始時の特別なエフェクト
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle, 
                rgba(255, 182, 193, 0.3) 0%, 
                transparent 70%);
            pointer-events: none;
            z-index: 9999;
            animation: fadeInOut 1s ease-out forwards;
        `;
        
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 1000);
    }
    
    bindGlobalTouchEffects() {
        // 画面全体のタッチエフェクト（既存の機能を拡張）
        document.addEventListener('touchstart', (e) => {
            if (!this.isClickableElement(e.target)) {
                const touch = e.touches[0];
                this.createGlobalHeartBurst(touch.clientX, touch.clientY);
            }
        }, { passive: true });
        
        document.addEventListener('click', (e) => {
            if (!this.isClickableElement(e.target)) {
                this.createGlobalHeartBurst(e.clientX, e.clientY);
            }
        });
    }
    
    isClickableElement(target) {
        return target.tagName === 'BUTTON' || 
               target.closest('button') || 
               target.classList.contains('onomatopoeia-btn');
    }
    
    createGlobalHeartBurst(x, y) {
        // 初デートモード専用のハートエフェクト
        if (window.touchEffects) {
            window.touchEffects.createHeartBurst(x, y);
        }
    }
    
    selectWeather(weatherType) {
        // 天気選択の処理
        const weatherButtons = document.querySelectorAll('.weather-btn');
        weatherButtons.forEach(btn => btn.classList.remove('selected'));
        
        event.target.closest('.weather-btn').classList.add('selected');
        
        // 履歴に保存
        this.weatherHistory.push({
            weather: weatherType,
            phase: this.currentPhase,
            questionIndex: this.currentQuestionIndex,
            timestamp: Date.now()
        });
        
        // フィードバック
        const weatherMessages = {
            sunny: "素敵な晴れやかな気持ちですね！☀️",
            cloudy: "少し複雑な気持ちかもしれませんね☁️",
            rainbow: "希望に満ちた気持ち、素敵です！🌈", 
            storm: "強い感情を感じているんですね⛈️"
        };
        
        setTimeout(() => {
            this.showModeratorMessage(weatherMessages[weatherType]);
        }, 500);
        
        // バイブレーション
        if (navigator.vibrate) {
            navigator.vibrate([20, 10, 20]);
        }
    }
}

// グローバル関数として天気選択を追加
window.selectWeather = function(weatherType) {
    if (window.firstDateModerator) {
        window.firstDateModerator.selectWeather(weatherType);
    }
};

// ルール画面からゲーム開始
window.startFirstDateFromRules = function() {
    showScreen('firstDateScreen');
    startFirstDateMode();
};

// CSS追加
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFloat {
        to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// グローバル関数
window.firstDateModerator = null;

window.startFirstDateMode = function() {
    window.firstDateModerator = new FirstDateModerator();
    window.firstDateModerator.init();
};

window.nextFirstDatePhase = function() {
    if (window.firstDateModerator) {
        window.firstDateModerator.showNextQuestion();
    }
};