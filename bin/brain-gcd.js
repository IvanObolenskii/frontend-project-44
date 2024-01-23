#!/usr/bin/env node
import { playGame } from '../src/index.js';
import { gameFunction, gameRounds, gameDescription } from '../src/games/largest-common-divisor.js';

playGame(gameFunction, gameRounds, gameDescription);
