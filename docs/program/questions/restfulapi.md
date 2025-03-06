# RESTful API 规范



总结一下 RESTful API 的完整规范：

1. **URL 设计规范**
```typescript
// 1. 使用名词复数形式
GET    /api/users          // 获取用户列表
GET    /api/users/123      // 获取单个用户
POST   /api/users          // 创建用户
PUT    /api/users/123      // 更新整个用户信息
PATCH  /api/users/123      // 更新部分用户信息
DELETE /api/users/123      // 删除用户

// 2. 资源关联关系
GET    /api/users/123/orders      // 获取用户的订单列表
POST   /api/users/123/orders      // 为用户创建订单

// 3. 查询参数使用
GET    /api/users?page=1&limit=10 // 分页
GET    /api/users?sort=name       // 排序
GET    /api/users?role=admin      // 过滤
```

2. **HTTP 方法使用规范**
```typescript
// GET: 获取资源，幂等性
export async function GET(request: NextRequest) {
    const users = await executeQuery('SELECT * FROM users');
    return NextResponse.json({ data: users });
}

// POST: 创建资源，非幂等
export async function POST(request: NextRequest) {
    const data = await request.json();
    const id = await insertData('users', data);
    return NextResponse.json({ data: { id } }, { status: 201 });
}

// PUT: 完整更新资源，幂等性
export async function PUT(request: NextRequest) {
    const { id, ...data } = await request.json();
    await updateData('users', id, data);
    return NextResponse.json({ message: '更新成功' });
}

// PATCH: 部分更新资源，非幂等
export async function PATCH(request: NextRequest) {
    const { id, ...updates } = await request.json();
    await partialUpdate('users', id, updates);
    return NextResponse.json({ message: '更新成功' });
}

// DELETE: 删除资源，幂等性
export async function DELETE(request: NextRequest) {
    const { id } = await request.json();
    await deleteData('users', id);
    return NextResponse.json(null, { status: 204 });
}
```

3. **状态码使用规范**
```typescript
// 2xx：成功
return NextResponse.json(data, { status: 200 });     // 成功
return NextResponse.json(data, { status: 201 });     // 创建成功
return NextResponse.json(null, { status: 204 });     // 删除成功

// 4xx：客户端错误
return NextResponse.json(
    { message: '参数错误' },
    { status: 400 }
);  // 错误请求

return NextResponse.json(
    { message: '未授权' },
    { status: 401 }
);  // 未认证

return NextResponse.json(
    { message: '禁止访问' },
    { status: 403 }
);  // 未授权

return NextResponse.json(
    { message: '资源不存在' },
    { status: 404 }
);  // 未找到

// 5xx：服务器错误
return NextResponse.json(
    { message: '服务器错误' },
    { status: 500 }
);  // 服务器错误
```

4. **响应数据格式规范**
```typescript
// 成功响应格式
{
    "message": "操作成功",          // 操作结果描述
    "data": {                      // 数据主体
        "id": 1,
        "name": "张三"
    },
    "meta": {                      // 元数据（可选）
        "total": 100,
        "page": 1,
        "limit": 10
    }
}

// 错误响应格式
{
    "message": "验证失败",          // 错误描述
    "errors": [{                   // 详细错误信息（可选）
        "field": "phone",
        "message": "手机号格式错误"
    }]
}
```

5. **安全规范**
```typescript
// 1. 身份验证
export async function middleware(request: NextRequest) {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        return NextResponse.json(
            { message: '未授权' },
            { status: 401 }
        );
    }
}

// 2. 参数验证
const schema = z.object({
    phone: z.string().length(11),
    password: z.string().min(6)
});

// 3. 数据消毒
const sanitizedData = {
    ...data,
    name: sanitizeHtml(data.name)
};

// 4. 速率限制
const rateLimit = new RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
```

6. **版本控制规范**
```typescript
// URL 版本控制
GET /api/v1/users
GET /api/v2/users

// 请求头版本控制
headers: {
    'Accept': 'application/vnd.company.api+json;version=1'
}
```

7. **文档规范**
```typescript
/**
 * 用户登录
 * @route POST /api/auth/signin
 * @param {string} phone - 手机号
 * @param {string} password - 密码
 * @returns {object} 包含token和用户信息的对象
 * @throws {401} 用户名或密码错误
 */
export async function POST(request: NextRequest) {
    // 实现代码
}
```

8. **错误处理规范**
```typescript
try {
    // 业务逻辑
} catch (error) {
    if (error instanceof ValidationError) {
        return NextResponse.json(
            { 
                message: '验证失败',
                errors: error.errors 
            },
            { status: 400 }
        );
    }
    
    console.error('操作失败:', error);
    return NextResponse.json(
        { message: '服务器错误' },
        { status: 500 }
    );
}
```

9. **缓存控制规范**
```typescript
// 设置缓存头
return NextResponse.json(data, {
    headers: {
        'Cache-Control': 'public, max-age=31536000',
        'ETag': '"33a64df551425fcc55e4d42a148795d9f25f89d4"'
    }
});
```

10. **CORS 规范**
```typescript
// 配置跨域
export const config = {
    matcher: '/api/:path*',
}

export function middleware(request: NextRequest) {
    return NextResponse.json(response, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}
```

这些规范可以帮助我们构建一个标准、安全、易于维护的 API 系统。根据具体项目需求，可以适当调整和扩展这些规范。