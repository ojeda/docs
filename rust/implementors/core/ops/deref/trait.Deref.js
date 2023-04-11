(function() {var implementors = {
"alloc":[["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/boxed/struct.ThinBox.html\" title=\"struct alloc::boxed::ThinBox\">ThinBox</a>&lt;T&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;"],["impl&lt;B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, B&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"associatedtype\" href=\"alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"alloc/borrow/trait.Borrow.html\" title=\"trait alloc::borrow::Borrow\">Borrow</a>&lt;B&gt;,</span>"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;T, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"]],
"core":[],
"kernel":[["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/str/struct.CStr.html\" title=\"struct kernel::str::CStr\">CStr</a>"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/str/struct.CString.html\" title=\"struct kernel::str::CString\">CString</a>"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.Arc.html\" title=\"struct kernel::sync::Arc\">Arc</a>&lt;T&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.ArcBorrow.html\" title=\"struct kernel::sync::ArcBorrow\">ArcBorrow</a>&lt;'_, T&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;"],["impl&lt;L:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a>&lt;I&gt; + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, I:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.LockInfo.html\" title=\"trait kernel::sync::LockInfo\">LockInfo</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.Guard.html\" title=\"struct kernel::sync::Guard\">Guard</a>&lt;'_, L, I&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.NoWaitLockGuard.html\" title=\"struct kernel::sync::NoWaitLockGuard\">NoWaitLockGuard</a>&lt;'_, T&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.LockFactory.html\" title=\"trait kernel::sync::LockFactory\">LockFactory</a>, T, I:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.LockInfo.html\" title=\"trait kernel::sync::LockInfo\">LockInfo</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.RevocableGuard.html\" title=\"struct kernel::sync::RevocableGuard\">RevocableGuard</a>&lt;'_, F, T, I&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F::<a class=\"associatedtype\" href=\"kernel/sync/trait.LockFactory.html#associatedtype.LockedType\" title=\"type kernel::sync::LockFactory::LockedType\">LockedType</a>&lt;Inner&lt;T&gt;&gt;: <a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a>&lt;I, Inner = Inner&lt;T&gt;&gt;,</span>"],["impl&lt;L:&nbsp;<a class=\"trait\" href=\"kernel/sync/trait.Lock.html\" title=\"trait kernel::sync::Lock\">Lock</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/sync/struct.SeqLockReadGuard.html\" title=\"struct kernel::sync::SeqLockReadGuard\">SeqLockReadGuard</a>&lt;'_, L&gt;"],["impl&lt;T, F:&nbsp;<a class=\"trait\" href=\"core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T)&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/types/struct.ScopeGuard.html\" title=\"struct kernel::types::ScopeGuard\">ScopeGuard</a>&lt;T, F&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"kernel/types/trait.AlwaysRefCounted.html\" title=\"trait kernel::types::AlwaysRefCounted\">AlwaysRefCounted</a>&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/types/struct.ARef.html\" title=\"struct kernel::types::ARef\">ARef</a>&lt;T&gt;"],["impl&lt;T, U, V&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/device/struct.Data.html\" title=\"struct kernel::device::Data\">Data</a>&lt;T, U, V&gt;"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/irq/struct.LockedIrqData.html\" title=\"struct kernel::irq::LockedIrqData\">LockedIrqData</a>"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/kasync/net/struct.TcpListener.html\" title=\"struct kernel::kasync::net::TcpListener\">TcpListener</a>"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/kasync/net/struct.TcpStream.html\" title=\"struct kernel::kasync::net::TcpStream\">TcpStream</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/revocable/struct.RevocableGuard.html\" title=\"struct kernel::revocable::RevocableGuard\">RevocableGuard</a>&lt;'_, T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/revocable/struct.AsyncRevocableGuard.html\" title=\"struct kernel::revocable::AsyncRevocableGuard\">AsyncRevocableGuard</a>&lt;'_, T&gt;"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/task/struct.TaskRef.html\" title=\"struct kernel::task::TaskRef\">TaskRef</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kernel/workqueue/struct.BoxedQueue.html\" title=\"struct kernel::workqueue::BoxedQueue\">BoxedQueue</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()