/*
 * Copyright (C) 2016 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
"use strict";

class Octane2RegExpBenchmark extends Benchmark {
    constructor(verbose = 0)
    {
        super(verbose);
    }

    setup()
    {
        Math.random = (function() {
            var seed = 49734321;
            return function() {
                // Robert Jenkins' 32 bit integer hash function.
                seed = ((seed + 0x7ed55d16) + (seed << 12))  & 0xffffffff;
                seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
                seed = ((seed + 0x165667b1) + (seed << 5))   & 0xffffffff;
                seed = ((seed + 0xd3a2646c) ^ (seed << 9))   & 0xffffffff;
                seed = ((seed + 0xfd7046c5) + (seed << 3))   & 0xffffffff;
                seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
                return (seed & 0xfffffff) / 0x10000000;
            };
        })();

        RegExpSetup();
    }

    runOnce()
    {
        RegExpRun();
    }

    tearDown()
    {
        RegExpTearDown();
    }
}
