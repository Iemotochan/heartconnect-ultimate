// Configuration Constants for HeartConnect Ultimate
const CONFIG = {
    // App Information
    APP_NAME: 'HeartConnect Ultimate',
    VERSION: '2.0.0',
    
    // Shadow Mode Configuration
    SHADOW_PASSWORD: 'alcohol',
    
    // Chaos Mode Configuration
    CHAOS_PASSWORD: 'pandora',
    CHAOS_UNLOCK_REQUIREMENT: 'shadow_completed', // Shadowモード完了後に解放
    
    // Level Configuration
    LEVELS: {
        TOTAL: 9,
        MIN: 1,
        MAX: 9,
        SHADOW_START: 7
    },
    
    // Level Descriptions
    LEVEL_DESCRIPTIONS: {
        1: '軽い話題',
        2: '日常の話',
        3: '感情について',
        4: '関係性',
        5: '秘密と本音',
        6: '親密さ',
        7: '禁断の話題',
        8: '刺激的な体験',
        9: '究極の質問'
    },
    
    // Mode Configuration
    MODES: {
        NORMAL: 'normal',
        UNIQUE: 'unique',
        SHADOW: 'shadow',
        CHAOS: 'chaos'
    },
    
    // Mode Names for Display
    MODE_NAMES: {
        normal: 'ノーマルモード',
        unique: 'ユニークモード',
        shadow: 'SHADOW MODE',
        chaos: 'CHAOS MODE'
    },
    
    // Color Schemes by Level
    LEVEL_COLORS: {
        1: { primary: '#FFF0F5', secondary: '#FFE4E1' },
        2: { primary: '#FFE4E1', secondary: '#FFC0CB' },
        3: { primary: '#FFC0CB', secondary: '#FFB6C1' },
        4: { primary: '#FFB6C1', secondary: '#FF69B4' },
        5: { primary: '#FF69B4', secondary: '#FF1493' },
        6: { primary: '#FF1493', secondary: '#C71585' },
        7: { primary: '#C71585', secondary: '#DC143C' },
        8: { primary: '#DC143C', secondary: '#8B0000' },
        9: { primary: '#8B0000', secondary: '#654321' }
    },
    
    // Animation Settings
    ANIMATIONS: {
        DURATION: {
            FAST: 300,
            NORMAL: 600,
            SLOW: 1000
        },
        EASING: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        PARTICLE_COUNT: {
            MIN: 12,
            MAX: 15
        }
    },
    
    // Particle Configuration
    PARTICLES: {
        HEART_BURST_COUNT: 15,
        STAR_BURST_COUNT: 12,
        SPARKLE_COUNT: 20,
        LIFETIME: 1500,
        DISTANCE: {
            MIN: 20,
            MAX: 50
        },
        // CHAOS Mode Enhanced Settings
        CHAOS: {
            BURST_MULTIPLIER: 2.5,
            FLOW_GRAVITY: -0.02,
            UPWARD_HEARTS: true,
            RAINBOW_EFFECTS: true,
            INTENSE_GLOW: true,
            EXTRA_PARTICLES: 25
        }
    },
    
    // Image Assets
    IMAGES: {
        HEART_LEVEL_1_5: 'image/1.png',
        HEART_LEVEL_6_9: 'image/2.png',
        BACKGROUND: 'image/back.png'
    },
    
    // Game State Configuration
    GAME_STATE: {
        INITIAL_TRUST_LEVEL: 15,
        REACTION_POINTS: 5,
        LEVEL_COMPLETION_BONUS: 10,
        MAX_TRUST_LEVEL: 100
    },
    
    // Reaction Types
    REACTIONS: {
        EMPATHY: 'empathy',
        CURIOUS: 'curious',
        MORE: 'more',
        QUESTION: 'question'
    },
    
    // Reaction Messages
    REACTION_MESSAGES: {
        empathy: '共感してくれてありがとう！💕',
        curious: 'もっと詳しく聞かせてね！🤔',
        more: '続きが気になる！💭',
        question: '質問があるんだね！❓'
    },
    
    // Screen Transition Settings
    TRANSITIONS: {
        SCREEN_CHANGE: 400,
        LEVEL_COMPLETE: 2000,
        MESSAGE_DISPLAY: 2500
    },
    
    // Touch Feedback
    HAPTIC: {
        ENABLED: true,
        LIGHT: 10,
        MEDIUM: 30,
        HEAVY: 50
    },
    
    // Storage Keys
    STORAGE_KEYS: {
        GAME_STATE: 'heartconnect_game_state',
        COMPLETED_LEVELS: 'heartconnect_completed_levels',
        SHADOW_UNLOCKED: 'heartconnect_shadow_unlocked',
        USER_PREFERENCES: 'heartconnect_preferences'
    },
    
    // Progress Thresholds
    PROGRESS_THRESHOLDS: {
        BEGINNER: 25,
        INTERMEDIATE: 50,
        ADVANCED: 75,
        EXPERT: 100
    },
    
    // UI Configuration
    UI: {
        MAX_WIDTH: 480,
        CARD_PADDING: {
            MOBILE: 15,
            TABLET: 20,
            DESKTOP: 25
        },
        BUTTON_HEIGHT: {
            MOBILE: 44,
            DESKTOP: 40
        }
    },
    
    // Performance Settings
    PERFORMANCE: {
        PARTICLE_OPTIMIZATION: true,
        REDUCE_MOTION_THRESHOLD: 'prefers-reduced-motion',
        GPU_ACCELERATION: true,
        THROTTLE_ANIMATIONS: false
    },
    
    // Debug Settings
    DEBUG: {
        ENABLED: false,
        LOG_LEVEL: 'info', // 'debug', 'info', 'warn', 'error'
        SHOW_FPS: false,
        PARTICLE_COUNT_DISPLAY: false
    }
};

// Utility Functions
const UTILS = {
    // Get heart image based on level
    getHeartImage: (level) => {
        return level <= 5 ? CONFIG.IMAGES.HEART_LEVEL_1_5 : CONFIG.IMAGES.HEART_LEVEL_6_9;
    },
    
    // Get level color scheme
    getLevelColors: (level) => {
        return CONFIG.LEVEL_COLORS[level] || CONFIG.LEVEL_COLORS[1];
    },
    
    // Check if level is shadow mode
    isShadowLevel: (level) => {
        return level >= CONFIG.LEVELS.SHADOW_START;
    },
    
    // Get mode display name
    getModeName: (mode) => {
        return CONFIG.MODE_NAMES[mode] || mode;
    },
    
    // Get level description
    getLevelDescription: (level) => {
        return CONFIG.LEVEL_DESCRIPTIONS[level] || 'Unknown Level';
    },
    
    // Clamp value between min and max
    clamp: (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    },
    
    // Random number between min and max
    random: (min, max) => {
        return Math.random() * (max - min) + min;
    },
    
    // Random integer between min and max (inclusive)
    randomInt: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Haptic feedback (if supported)
    hapticFeedback: (intensity = CONFIG.HAPTIC.LIGHT) => {
        if (CONFIG.HAPTIC.ENABLED && navigator.vibrate) {
            navigator.vibrate(intensity);
        }
    },
    
    // Log with level checking
    log: (level, message, ...args) => {
        if (!CONFIG.DEBUG.ENABLED) return;
        
        const levels = ['debug', 'info', 'warn', 'error'];
        const currentLevelIndex = levels.indexOf(CONFIG.DEBUG.LOG_LEVEL);
        const messageLevelIndex = levels.indexOf(level);
        
        if (messageLevelIndex >= currentLevelIndex) {
            console[level](`[HeartConnect] ${message}`, ...args);
        }
    },
    
    // Check if user prefers reduced motion
    prefersReducedMotion: () => {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    
    // Get animation duration based on user preferences
    getAnimationDuration: (duration) => {
        return UTILS.prefersReducedMotion() ? 10 : duration;
    },
    
    // Format time for display
    formatTime: (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
    },
    
    // Save to localStorage with error handling
    saveToStorage: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            UTILS.log('error', 'Failed to save to localStorage:', error);
            return false;
        }
    },
    
    // Load from localStorage with error handling
    loadFromStorage: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            UTILS.log('error', 'Failed to load from localStorage:', error);
            return defaultValue;
        }
    },
    
    // Remove from localStorage
    removeFromStorage: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            UTILS.log('error', 'Failed to remove from localStorage:', error);
            return false;
        }
    },
    
    // Check if device is mobile
    isMobile: () => {
        return window.innerWidth <= 768;
    },
    
    // Check if device supports touch
    isTouchDevice: () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },
    
    // Throttle function execution
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Debounce function execution
    debounce: (func, wait, immediate) => {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
};

// Event System
const EVENTS = {
    // Custom event dispatcher
    dispatch: (eventName, detail = {}) => {
        const event = new CustomEvent(eventName, { detail });
        document.dispatchEvent(event);
        UTILS.log('debug', `Event dispatched: ${eventName}`, detail);
    },
    
    // Listen for custom events
    listen: (eventName, callback) => {
        document.addEventListener(eventName, callback);
        UTILS.log('debug', `Event listener added: ${eventName}`);
    },
    
    // Remove event listener
    remove: (eventName, callback) => {
        document.removeEventListener(eventName, callback);
        UTILS.log('debug', `Event listener removed: ${eventName}`);
    }
};

// Initialize configuration
const initConfig = () => {
    UTILS.log('info', 'HeartConnect Ultimate initialized', {
        version: CONFIG.VERSION,
        debug: CONFIG.DEBUG.ENABLED,
        mobile: UTILS.isMobile(),
        touch: UTILS.isTouchDevice(),
        reducedMotion: UTILS.prefersReducedMotion()
    });
    
    // Set CSS custom properties for dynamic theming
    const root = document.documentElement;
    root.style.setProperty('--app-max-width', CONFIG.UI.MAX_WIDTH + 'px');
    
    if (UTILS.isMobile()) {
        root.style.setProperty('--card-padding', CONFIG.UI.CARD_PADDING.MOBILE + 'px');
        root.style.setProperty('--button-height', CONFIG.UI.BUTTON_HEIGHT.MOBILE + 'px');
    } else {
        root.style.setProperty('--card-padding', CONFIG.UI.CARD_PADDING.DESKTOP + 'px');
        root.style.setProperty('--button-height', CONFIG.UI.BUTTON_HEIGHT.DESKTOP + 'px');
    }
};

// Export for module systems or global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, UTILS, EVENTS, initConfig };
} else {
    window.CONFIG = CONFIG;
    window.UTILS = UTILS;
    window.EVENTS = EVENTS;
    window.initConfig = initConfig;
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConfig);
} else {
    initConfig();
}