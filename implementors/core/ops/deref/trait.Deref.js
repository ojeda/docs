(function() {var implementors = {};
implementors["alloc"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, B&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","synthetic":false,"types":["alloc::rc::Rc"]},{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;","synthetic":false,"types":["alloc::sync::Arc"]},{"text":"impl&lt;T, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::vec::Vec"]}];
implementors["kernel"] = [{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/str/struct.CStr.html\" title=\"struct kernel::str::CStr\">CStr</a>","synthetic":false,"types":["kernel::str::CStr"]},{"text":"impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/task/struct.TaskRef.html\" title=\"struct kernel::task::TaskRef\">TaskRef</a>&lt;'_&gt;","synthetic":false,"types":["kernel::task::TaskRef"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.Ref.html\" title=\"struct kernel::sync::Ref\">Ref</a>&lt;T&gt;","synthetic":false,"types":["kernel::sync::arc::Ref"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.RefBorrow.html\" title=\"struct kernel::sync::RefBorrow\">RefBorrow</a>&lt;T&gt;","synthetic":false,"types":["kernel::sync::arc::RefBorrow"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.Guard.html\" title=\"struct kernel::sync::Guard\">Guard</a>&lt;'_, L&gt;","synthetic":false,"types":["kernel::sync::guard::Guard"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/of/struct.ConstOfMatchTable.html\" title=\"struct kernel::of::ConstOfMatchTable\">ConstOfMatchTable</a>&lt;N&gt;","synthetic":false,"types":["kernel::of::ConstOfMatchTable"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()