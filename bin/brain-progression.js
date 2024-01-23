#!/usr/bin/env node
import { playGame } from '../src/index.js';
import { gameFunction, gameRounds, gameDescription } from '../src/games/progression.js';

playGame(gameFunction, gameRounds, gameDescription);
