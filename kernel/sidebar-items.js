initSidebarItems({"constant":[["PAGE_SIZE","Page size defined in terms of the `PAGE_SHIFT` macro from C."]],"fn":[["bit","Creates a bit mask with a single bit set."],["bits_iter","Returns an iterator over the set bits of `value`."],["to_result","Calls a kernel function that returns an integer error code on failure and converts the result to a [`Result`]."]],"macro":[["b_str","Creates a new [`BStr`] from a string literal."],["build_assert","Asserts that a boolean expression is `true` at compile time."],["build_error","Fails the build if the code path calling `build_error!` can possibly be executed."],["c_str","Creates a new [`CStr`] from a string literal."],["condvar_init","Safely initialises a [`CondVar`] with the given name, generating a new lock class."],["container_of","Produces a pointer to an object from a pointer to one of its fields."],["count_paren_items","Counts the number of parenthesis-delimited, comma-separated items."],["dbg","`std::dbg`, but using [`pr_info`] instead of `eprintln`."],["declare_file_operations","Defines the [`FileOperations::TO_USE`] field based on a list of fields to be populated."],["declare_gpio_chip_operations","Defines the [`Chip::TO_USE`] field based on a list of fields to be populated."],["declare_irq_chip_operations","Defines the [`Chip::TO_USE`] field based on a list of fields to be populated."],["define_id_array","Defines a new constant [`IdArray`] with a concise syntax."],["define_id_table","Defines a new constant [`IdTable`] with a concise syntax."],["define_of_id_table","Defines a const open firmware device id table that also carries per-entry data/context/info."],["dev_alert","Prints an alert-level message (level 1) prefixed with device information."],["dev_crit","Prints a critical-level message (level 2) prefixed with device information."],["dev_dbg","Prints a debug-level message (level 7) prefixed with device information."],["dev_emerg","Prints an emergency-level message (level 0) prefixed with device information."],["dev_err","Prints an error-level message (level 3) prefixed with device information."],["dev_info","Prints an info-level message (level 6) prefixed with device information."],["dev_notice","Prints a notice-level message (level 5) prefixed with device information."],["dev_warn","Prints a warning-level message (level 4) prefixed with device information."],["first_item","Converts a comma-separated list of pairs into an array with the first element. That is, it discards the second element of the pair."],["module_driver","Declares a kernel module that exposes a single driver."],["module_misc_device","Declares a kernel module that exposes a single misc device."],["module_platform_driver","Declares a kernel module that exposes a single platform driver."],["mutex_init","Safely initialises a [`Mutex`] with the given name, generating a new lock class."],["offset_of","Calculates the offset of a field from the beginning of the struct it belongs to."],["pr_alert","Prints an alert-level message (level 1)."],["pr_cont","Continues a previous log message in the same line."],["pr_crit","Prints a critical-level message (level 2)."],["pr_debug","Prints a debug-level message (level 7)."],["pr_emerg","Prints an emergency-level message (level 0)."],["pr_err","Prints an error-level message (level 3)."],["pr_info","Prints an info-level message (level 6)."],["pr_notice","Prints a notice-level message (level 5)."],["pr_warn","Prints a warning-level message (level 4)."],["revocable_mutex_init","Safely initialises a [`RevocableMutex`] with the given name, generating a new lock class."],["second_item","Converts a comma-separated list of pairs into an array with the second element. That is, it discards the first element of the pair."],["spinlock_init","Safely initialises a [`SpinLock`] with the given name, generating a new lock class."],["static_assert","Static assert (i.e. compile-time assert)."]],"mod":[["buffer","Struct for writing to a pre-allocated buffer with the [`write!`] macro."],["c_types","C types for the bindings."],["chrdev","Character devices."],["clk","Common clock framework."],["cred","Credentials management."],["device","Generic devices that are part of the kernel’s driver model."],["driver","Generic support for drivers of different buses (e.g., PCI, Platform, Amba, etc.)."],["file","Files and file descriptors."],["file_operations","File operations."],["gpio","Support for gpio device drivers."],["io_buffer","Buffers used in IO."],["io_mem","Memory-mapped IO."],["iov_iter","IO vector iterators."],["irq","Interrupts and interrupt chips."],["linked_list","Linked lists."],["miscdev","Miscellaneous devices."],["of","Devicetree and Open Firmware abstractions."],["pages","Kernel page allocation and management."],["platform","Platform devices and drivers."],["power","Power management interfaces."],["prelude","The `kernel` prelude."],["print","Printing facilities."],["random","Random numbers."],["rbtree","Red-black trees."],["revocable","Revocable objects."],["security","Linux Security Modules (LSM)."],["str","String representations."],["sync","Synchronisation primitives."],["sysctl","System control."],["task","Tasks (threads and processes)."],["user_ptr","User pointers."]],"struct":[["Error","Generic integer kernel error."],["KParamGuard","Scoped lock on the kernel parameters of [`ThisModule`]."],["Mode","Permissions."],["Opaque","Stores an opaque value."],["ScopeGuard","Runs a cleanup function/closure when dropped."],["ThisModule","Equivalent to `THIS_MODULE` in the C API."]],"trait":[["KernelModule","The top level entrypoint to implementing a kernel module."]],"type":[["Result","A [`Result`] with an [`Error`] error type."]]});