#!/usr/bin/env node
import playGame from '../src/index.js';
import { gameFunction, gameRounds, gameGreeting } from '../src/games/progression.js';

playGame(gameFunction, gameRounds, gameGreeting);
