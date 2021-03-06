import Builder from '../Builder.js'
import * as assert from '../assert.js'

{
    const b = new Builder();
    const locals = [];
    for (let i = 0; i < 100; ++i)
        locals[i] = "i64";
    let cont = b.Type().End()
        .Function().End()
        .Export()
            .Function("loop")
        .End()
        .Code()
        .Function("loop", { params: ["i32"], ret: "i32" }, locals);
    for (let i = 0; i < 100; ++i)
        cont = cont.I64Const(i + 1).I64Const(0x7f8f3ff1).I64Mul().SetLocal(i + 1);
    cont.Loop("void")
        .Block("void", b => {
            let cont = b.GetLocal(0)
                        .I32Const(0)
                        .I32Eq()
                        .BrIf(0);
            for (let i = 0; i < 100; ++i)
                cont = cont.GetLocal(i + 1);
            for (let i = 0; i < 99; ++i)
                cont = cont.I64Add();
            cont = cont.SetLocal(1);
            for (let i = 0; i < 100; ++i)
                cont = cont.GetLocal(i + 1).I64Const(1).I64Add().SetLocal(i + 1);
            return cont.GetLocal(0)
                .I32Const(1)
                .I32Sub()
                .SetLocal(0)
                .Br(1)
            })
        .End()
        .GetLocal(1)
        .I32WrapI64()
        .Return()
        .End()
        .End()

    const bin = b.WebAssembly().get();
    const module = new WebAssembly.Module(bin);
    const instance = new WebAssembly.Instance(module);

    assert.eq(-1592179375, instance.exports.loop(3000000));
}
